import { Router } from "express";
import { db } from "../db";
import { tags } from "../db/schema";

const router = Router();

router.get("/", async (req, res) => {
  const tagData = await db.select().from(tags);
  res.json(tagData);
});

export default router;
