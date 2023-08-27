import { Composer } from "grammy";
import { Context } from '../utils/context';

const helpComposer = new Composer<Context>();

helpComposer.command("help", async (ctx) => {
	await ctx.reply("NO-ONE can help you.");
});