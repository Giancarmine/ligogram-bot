import { webhookCallback } from "grammy/web";
import bot from "./core/bot";
import "./handlers";

bot.command("start", async (ctx) => {
	await ctx.reply("Hello W!");
	await bot.api.setMyCommands([
		{ command: "start", description: "Start the bot" },
		{ command: "who", description: "Show who I'm" },
		{ command: "test", description: "Show a test" },
		{ command: "help", description: "Show help text" },
		{ command: "settings", description: "Open settings" },
	  ]);
});

// Catch errors and log them
bot.catch(err => console.error(err))

addEventListener("fetch", webhookCallback(bot, "cloudflare"));
