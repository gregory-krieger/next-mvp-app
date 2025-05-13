import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db/db";
import { nextCookies } from "better-auth/next-js";
import { customSession, openAPI, organization } from "better-auth/plugins";

import resend from "../resend/resend";
import VerifyEmailAddress from "../emails/verify-email-address";
import { listUserOrganizations } from "./list-user-orgs";

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
    customSession(async ({ user, session }) => {
      const organizations = await listUserOrganizations(user.id);
      return {
        user,
        session,
        organizations,
      };
    }),
    openAPI(),
    nextCookies(), // make sure this is the last plugin in the array
  ],
});
