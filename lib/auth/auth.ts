import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db/db";
import { nextCookies } from "better-auth/next-js";
import { customSession, Organization, organization } from "better-auth/plugins";

import resend from "../resend/resend";
import VerifyEmailAddress from "@/lib/react-email/emails/verify-email-address";
import { headers } from "next/headers";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite"
  }),
  emailAndPassword: {
    enabled: true,
  },
  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url }) => {
      const { error } = await resend.emails.send({
        from: "BIGmed <onboarding@updates.bigmed.ch>",
        to: [user.email],
        subject: "Verify your email address",
        react: VerifyEmailAddress({ url, username: user.name }),
      });

      if (error) throw new Error(error.message);
    },
  },
  socialProviders: {
    google: {
      prompt: "select_account",
      clientId: process.env.GOOGLE_CLIENT_ID! as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET! as string,
    },
  },
  plugins: [
    organization(),
    // custom session plugin to add organizations to the session
    customSession(async ({ user, session }) => {
      const organizations = (await auth.api.listOrganizations({
        headers: await headers(),
      })) as Organization[];

      return {
        organizations,
        user: {
          ...user,
        },
        session,
      };
    }),
    nextCookies(), // make sure this is the last plugin in the array
  ],
});
