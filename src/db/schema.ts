import { mysqlTable, varchar, int } from "drizzle-orm/mysql-core";

export const tags = mysqlTable("tags", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }),
});
