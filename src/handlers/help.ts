import { Composer } from "grammy";
import { Context } from '../context';

const helpComposer = new Composer<Context>();

helpComposer.command("help", async (ctx) => {
	await ctx.reply("NO-ONE can help you.");
});

export default helpComposer;