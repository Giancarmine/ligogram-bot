import { Bot } from "grammy/web";
// import process from "node:process";
import { BotContext } from "./context";

// const bot_token = process.env["TOKEN"];

// if (!bot_token) throw new Error("TOKEN is required as an environment variable!");

const bot = new Bot<BotContext>(BOT_TOKEN);

export default bot