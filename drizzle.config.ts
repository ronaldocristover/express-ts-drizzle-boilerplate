import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle/migrations",
  dialect: "mysql", // ✅ This line is required
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
} satisfies Config;
