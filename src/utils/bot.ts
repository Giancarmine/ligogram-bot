import { Bot } from "grammy/web";
import process from 'node:process';

const bot_token :any = process.env["BOT_TOKEN"];

// The following line of code assumes that you have configured the secrets BOT_TOKEN and BOT_INFO.
// See https://developers.cloudflare.com/workers/platform/environment-variables/#secrets-on-deployed-workers.
// The BOT_INFO is obtained from `bot.api.getMe()`.
const bot  = new Bot(bot_token);

export default bot