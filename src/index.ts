// Note that we're importing from 'grammy/web', not 'grammy'.
import { Bot, Context, Keyboard, SessionFlavor, session, webhookCallback } from "grammy/web";

interface SessionData {
    language: string
}
type MyContext = Context & SessionFlavor<SessionData>

const settingsKeyboard = new Keyboard()
	.text("About you 👌").row()
	.text("Language 👅")
	.oneTime();

// The following line of code assumes that you have configured the secrets BOT_TOKEN and BOT_INFO.
// See https://developers.cloudflare.com/workers/platform/environment-variables/#secrets-on-deployed-workers.
// The BOT_INFO is obtained from `bot.api.getMe()`.
const bot = new Bot<MyContext>(BOT_TOKEN);

bot.use(session({ initial: () => ({ messages: "English" }) }))

bot.command("start", async (ctx) => {
	await ctx.reply("Hello W!");
	await bot.api.setMyCommands([
		{ command: "start", description: "Start the bot" },
		{ command: "help", description: "Show help text" },
		{ command: "who", description: "Show who I'm" },
		{ command: "settings", description: "Open settings" },
	  ]);
});

bot.command("who", async (ctx) => {
	await ctx.reply(`Your id is: ${ctx.from?.id}`);
	await ctx.reply(`Your name is: ${ctx.from?.first_name}`);

	const profilesPhotos = ctx.getUserProfilePhotos(ctx.from?.id);
	await profilesPhotos.photos.forEach(photo => {
		ctx.replyWithPhoto(photo.file_id);
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


// bot.on('message', async (ctx, next) => {
//     ctx.session.language = "Spanish";
//     await next()
// })

// Catch errors and log them
bot.catch(err => console.error(err))

addEventListener("fetch", webhookCallback(bot, "cloudflare"));
