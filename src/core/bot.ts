import { Bot } from "grammy/web";
import { BotContext } from "./context";
import env from "./env";

const bot = new Bot<BotContext>(env.BOT_TOKEN);

export default bot;
