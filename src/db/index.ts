import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";
import "dotenv/config";

const pool = mysql.createPool(process.env.DATABASE_URL as string);

// ✅ Add `mode: 'default'` to the config
export const db = drizzle(pool, {
  schema,
  mode: "default",
});
