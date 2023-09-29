import { InlineKeyboard } from 'grammy';
import bot from '../core/bot';

const chooseInlineKeyboard = new InlineKeyboard()
  .text('❌', 'choose-nope')
  .text('✔️', 'choose-like');

bot.command('test', async (ctx) => {
  const profilesPhotos = await ctx.getUserProfilePhotos(ctx.from.id);

  await ctx.replyWithPhoto(profilesPhotos.photos[0][0].file_id);
  await ctx.reply(`Do you like @${ctx.from?.first_name}`, {
    reply_markup: chooseInlineKeyboard,
  });
});

// Wait for click events with specific callback data.
bot.callbackQuery('choose-nope', async (ctx) => {
  await ctx.answerCallbackQuery({
    text: "Ohhh... You DON'T liked!",
  });
});

bot.callbackQuery('choose-like', async (ctx) => {
  await ctx.answerCallbackQuery({
    text: `You liked ${ctx.callbackQuery.data}!`,
  });
});
