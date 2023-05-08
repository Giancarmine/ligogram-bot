
bot.command("start", async (ctx) => {
	await ctx.reply("Hello W!");
	await bot.api.setMyCommands([
		{ command: "start", description: "Start the bot" },
		{ command: "help", description: "Show help text" },
		{ command: "who", description: "Show who I'm" },
		{ command: "settings", description: "Open settings" },
	  ]);
});

bot.command("who", async (ctx) => {
	const profilesPhotos = await ctx.getUserProfilePhotos(ctx.from.id);

	await ctx.replyWithPhoto(profilesPhotos.photos[0][0].file_id);
	await ctx.reply(`Your name is: @${ctx.from?.first_name}`);
});

bot.command("help", async (ctx) => {
	await ctx.reply("NO-ONE can help you.");
});

bot.command("settings", async (ctx) => {
	await ctx.reply("Make a change in your life:", {
		reply_markup: settingsKeyboard,
	  });
});