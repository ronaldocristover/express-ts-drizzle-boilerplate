import { db } from "./index";
import { tags } from "./schema";

async function seed() {
  console.log("🌱 Seeding database...");

  // Optional: Clear existing data
  await db.delete(tags);

  // Insert sample data
  await db
    .insert(tags)
    .values([{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }]);

  console.log("✅ Seeding complete!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Seeding failed:", err);
  process.exit(1);
});
