import { Bot } from "grammy/web";
import { BotContext } from "./context";

const bot = new Bot<BotContext>(process.env.BOT_TOKEN);

export default bot;
