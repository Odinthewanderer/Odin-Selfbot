exports.run = async (bot, msg, args) => {
  const user = (msg.mentions.users.first() || bot.users.get(args[0]) || null);
  const amount = !!user ? parseInt(msg.content.split(" ")[2]) : parseInt(msg.content.split(" ")[1]);
  if (!amount) return msg.edit("Must specify an amount to delete!").then(msg.delete(2000));
  if (!amount && !user) return msg.edit("Must specify a user and amount, or just an amount, of messages to purge!").then(msg.delete(2000));
  await msg.delete();
  let messages = await msg.channel.fetchMessages({limit: 100});
  if(user) {
    messages = messages.array().filter(m=>m.author.id === user.id);
    bot.log("log", "Purge Amount", msg.author, "Amount: " + amount);
    messages.length = amount;
  } else {
    messages = messages.array();
    messages.length = amount + 1;
  }
  messages.map(async m => await m.delete().catch(console.error));
};

/*
    Example by eslachance#4611
    Example usage: !purge @user 10 , or !purge 25
    Assumes your <Message> variable is <Message>
    If no user is provided, deletes any <Message>.
    
    REMINDER: <Message> is what you defined in the <Client>.on('<Message>', <Message>) event.
              <Client> is what ever you defined your new Discord.Client();
    

  const user = (<Message>.mentions.users.first() || bot.users.get(args[0]) || null);
  const amount = !!user ? parseInt(<Message>.content.split(" ")[2]) : parseInt(<Message>.content.split(" ")[1]);
  if (!amount) return <Message>.reply("Must specify an amount to delete!");
  if (!amount && !user) return <Message>.reply("Must specify a user and amount, or just an amount, of messages to purge!");
  <Message>.channel.fetchMessages({limit: 100}).then((messages) => {
    if (user) {
      messages = messages.filter(m => m.author.id === user.id).array();
    } else {
      messages = messages.array();
    }
    
  <Message>.channel.bulkDelete(messages).catch(error => console.log(error.stack));
});

*/
