import { createLogger, format, transports } from "winston";
import LokiTransport from "winston-loki";

const { combine, timestamp, printf, colorize } = format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level}: ${message}`;
});

export const logger = createLogger({
  level: "info",
  format: combine(
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    colorize(),
    logFormat
  ),
  transports: [
    new transports.Console(),
    new LokiTransport({
      host: process.env.LOKI_URL || "http://localhost:3100",
      labels: { app: "express-drizzle" },
      json: true,
      replaceTimestamp: true,
      onConnectionError: (err) =>
        console.error("❌ Loki connection error:", err),
    }),
  ],
});
