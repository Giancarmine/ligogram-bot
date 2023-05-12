// Note that we're importing from 'grammy/web', not 'grammy'.
import { Bot, Context, InlineKeyboard, Keyboard, webhookCallback } from "grammy/web";

const settingsKeyboard = new Keyboard()
	.text("About you 👌").row()
	.text("Language 👅")
	.oneTime();

// The following line of code assumes that you have configured the secrets BOT_TOKEN and BOT_INFO.
// See https://developers.cloudflare.com/workers/platform/environment-variables/#secrets-on-deployed-workers.
// The BOT_INFO is obtained from `bot.api.getMe()`.
const bot = new Bot(BOT_TOKEN);

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

	const chooseInlineKeyboard = new InlineKeyboard()
	.text("❌›", "nope")
	.text("✔️", "like");
  

	await ctx.replyWithPhoto(profilesPhotos.photos[0][0].file_id);
	await ctx.reply(`Do you like @${ctx.from?.first_name}`, {
		reply_markup: chooseInlineKeyboard,
	  });
	  
});

bot.command("help", async (ctx) => {
	await ctx.reply("NO-ONE can help you.");
});

bot.command("settings", async (ctx) => {
	await ctx.reply("Make a change in your life:", {
		reply_markup: settingsKeyboard,
	  });
});

// Catch errors and log them
bot.catch(err => console.error(err))

addEventListener("fetch", webhookCallback(bot, "cloudflare"));
