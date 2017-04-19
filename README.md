# Odin-Selfbot

## Getting your login token

1. From either the web application, or the installed Discord app, use the **CTRL+SHIFT+I** keyboard shortcut.
2. This brings up the **Developer Tools**. Go to the **Application** tab
3. On the left, expand **Storage**, then click on the discordapp.com entry (it should be the only one).
4. Locate the entry called `token`, and copy it.

> **KEEP YOUR TOKEN SECRET, AND NEVER SHARE IT WITH ANYONE**

## Starting the selfbot

To start the selfbot, in the command prompt, run the following command:
`node app.js`

## Adding Commands

To add a command, create a new file in the `./commands/` folder. The name of the file will be the command trigger. 

For example, let's add a new command called "blah": 

`./commands/blah.js` is the filename. The base contents of a command is the following: 

```js
exports.run = (bot, msg, args) => {
  msg.reply("Changeme, fool");
};
```

Anything inside this exports.run() function will be executed when `/blah` is said in chat. Commands are built
using regular, standard discord.js code - there is nothing special about any of this. `args` is the arguments
of the command being put in the chat, which is "the whole message split by space, with the command removed". 
So for example if you do `/blah 1 2 thing heck`, `args` is an array as such: `["1", "2", "thing", "heck"]` (yes, 
those are all strings).
