import { Keyboard } from "grammy/web";
import bot from "../core/bot";

const settingsKeyboard = new Keyboard()
	.text("About you 👌").row()
	.text("Language 👅")
	.oneTime();

bot.command("settings", async (ctx) => {
	await ctx.reply("Make a change in your life:", {
		reply_markup: settingsKeyboard,
	  });
});