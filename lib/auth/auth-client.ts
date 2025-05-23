"use client";

import { createAuthClient } from "better-auth/react";
import {
  customSessionClient,
  organizationClient,
} from "better-auth/client/plugins";
import { auth } from "./auth";

export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: process.env.BETTER_AUTH_URL! as string,
  plugins: [organizationClient(), customSessionClient<typeof auth>()],
});
