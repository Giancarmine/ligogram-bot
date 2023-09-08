import bot from "../core/bot";
const correctAnswerId = 2;

bot.command("q", async (ctx) => {
  const message = await ctx.api.sendPoll(
    ctx.msg.chat.id,
    `What is 1+1?`,
    ["0", "1", "2", "3"],
    {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: correctAnswerId,
    }
  );
  console.log("sent poll #" + message.poll.id + " to user " + ctx.from?.id);
});

bot.on("poll_answer", async (ctx) => {
  console.log(
    ctx.pollAnswer.user.first_name +
      " answered to poll " +
      ctx.pollAnswer.poll_id +
      " with option " +
      ctx.pollAnswer.option_ids
  );

  if (ctx.pollAnswer.option_ids.indexOf(correctAnswerId) > -1) {
    await bot.api.sendMessage(ctx.pollAnswer.user.id, "You're a genius!");
  } else {
    await bot.api.sendMessage(ctx.pollAnswer.user.id, "Almost correct!");
  }
});
