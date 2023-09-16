import { Bot } from 'grammy/web';
import { BotContext } from './context';
import { I18n } from '@grammyjs/i18n';

// Create a new I18n instance.
const i18n = new I18n<BotContext>({
  defaultLocale: 'en',
  directory: 'locales',
});

const bot = new Bot<BotContext>(BOT_TOKEN);

bot.use(i18n);

export default bot;
