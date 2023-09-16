import bot from "../core/bot";

bot.command("help", async (ctx) => {
	await ctx.reply(ctx.t("help"));
});