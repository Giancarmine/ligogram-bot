import { Bot } from 'grammy/web';
import { BotContext } from './context';
import { useFluent } from '@grammyjs/fluent';
import { Fluent } from '@moebius/fluent';

const bot = new Bot<BotContext>(BOT_TOKEN);

// Create an instance of @moebius/fluent and configure it
const fluent = new Fluent();

// Add translations that you need
await fluent.addTranslation({
  locales: 'en',
  source: `
  -bot-name = Ligogram-bot

  welcome = Welcome, {-bot-name} is alive!
  `,

  // All the aspects of Fluent are highly configurable
  bundleOptions: {
    // Use this option to avoid invisible characters
    // around placeables
    useIsolating: false,
  },
});

bot.use(
  useFluent({
    fluent,
  }),
);

export default bot;
