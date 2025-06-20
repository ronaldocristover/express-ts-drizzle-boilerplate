import express from "express";
import { requestLogger } from "./middleware/logger.middleware";
import { logger } from "./utils/logger";
import tagRoutes from "./routes/tag.routes";
import helmet from "helmet";

const app = express();
app.use(express.json());
app.use(requestLogger);
app.use(helmet());

app.use("/tags", tagRoutes);

app.use(
  (
    err: any,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    logger.error(err.stack || err.message || "Unknown error");
    res.status(500).json({ error: "Internal server error" });
  }
);

export default app;
