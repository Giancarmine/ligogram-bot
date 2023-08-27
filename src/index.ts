// Note that we're importing from 'grammy/web', not 'grammy'.
import { InlineKeyboard, Keyboard, webhookCallback } from "grammy/web";
import bot from "./utils/bot";
import "./handlers";

const settingsKeyboard = new Keyboard()
	.text("About you 👌").row()
	.text("Language 👅")
	.oneTime();

const chooseInlineKeyboard = new InlineKeyboard()
.text("❌", "choose-nope")
.text("✔️", "choose-like");

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

bot.command("who", async (ctx) => {
	const profilesPhotos = await ctx.getUserProfilePhotos(ctx.from.id);

	await ctx.replyWithPhoto(profilesPhotos.photos[0][0].file_id);
	await ctx.reply(`Your name is: @${ctx.from?.first_name}`);
});

bot.command("test", async (ctx) => {
	const profilesPhotos = await ctx.getUserProfilePhotos(ctx.from.id);  

	await ctx.replyWithPhoto(profilesPhotos.photos[0][0].file_id);
	await ctx.reply(`Do you like @${ctx.from?.first_name}`, {
		reply_markup: chooseInlineKeyboard,
	  });
});

// Wait for click events with specific callback data.
bot.callbackQuery("choose-nope", async (ctx) => {
	await ctx.answerCallbackQuery({
		text: "Ohhh... You DON'T liked!",
	});
});

bot.callbackQuery("choose-like", async (ctx) => {
	await ctx.answerCallbackQuery({
		text: `Ohhh... You DON'T liked ${ctx.callbackQuery.data}!`,
	});
});

bot.command("settings", async (ctx) => {
	await ctx.reply("Make a change in your life:", {
		reply_markup: settingsKeyboard,
	  });
});

// Catch errors and log them
bot.catch(err => console.error(err))

addEventListener("fetch", webhookCallback(bot, "cloudflare"));
