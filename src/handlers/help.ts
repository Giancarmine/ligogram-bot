import bot from "../utils/bot";

bot.command("help", async (ctx) => {
	await ctx.reply("NO-ONE can help you.");
});