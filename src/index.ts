import { webhookCallback } from "grammy/web";
import bot from "./core/bot";
import { handleErrors } from "./utils/errors";
import logger from "./utils/logger";
import "./handlers";

handleErrors()

bot.command("start", async (ctx) => {
	await ctx.reply("Hello W!");
	await bot.api.setMyCommands([
		{ command: "start", description: "Start the bot" },
		{ command: "who", description: "Show who I'm" },
		{ command: "test", description: "Show a test" },
		{ command: "help", description: "Show help text" },
		{ command: "settings", description: "Open settings" },
	  ]);
	logger.info(`@${ctx.me?.username} started!`);
});

addEventListener("fetch", webhookCallback(bot, "cloudflare"));
