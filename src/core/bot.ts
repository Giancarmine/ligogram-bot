import { Bot } from "grammy/web";
import { BotContext } from "./context";

const bot = new Bot<BotContext>(BOT_TOKEN);

export default bot