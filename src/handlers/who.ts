import bot from '../core/bot';

bot.command('who', async (ctx) => {
  const profilesPhotos = await ctx.getUserProfilePhotos(ctx.from.id);

  await ctx.replyWithPhoto(profilesPhotos.photos[0][0].file_id);
  await ctx.reply(`Your name is: @${ctx.from?.first_name}`);
});
