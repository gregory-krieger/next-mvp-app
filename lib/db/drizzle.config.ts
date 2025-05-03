import type { Config } from "drizzle-kit";
import { config } from "dotenv";

if (process.env.NODE_ENV !== "production") {
  config({ path: "./.env.local" });
}

export default {
  schema: "./lib/db/schema.ts",
  out: "./lib/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
