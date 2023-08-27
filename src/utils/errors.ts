import bot from "../core/bot";
import logger from "./logger";

export const handleErrors = () => {
  bot.catch((error) => {
    logger.error("Bot error", { error });
  });

  process.on("unhandledRejection", (reason) => {
    logger.error("Unhandled rejection", { reason });
  });
  process.on("uncaughtException", (reason) => {
    logger.error("Uncaught Exception", { reason });
  });
};