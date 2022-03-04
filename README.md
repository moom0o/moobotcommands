# CONTRIBUTING COMMANDS TO MOOBOT!
Moobot is not 100% open source, however it is now possible to contribute your own commands! Development has slowed down in the past months and the community now has a chance to add their own fun, useless, and shitty commands!

## How to contribute?
Please take a look at an example command in this repository, I have open sourced some commands to be used as examples for forming your own commands.

Make sure you have extensive knowlege of JavaScript, Node.JS, and Mineflayer.

Once a command is created you can create a pull request where the community can comment and may be approved. Then it will be added into moobot. The commands will remain stored in this github repository as open source.

Please create an issue for any questions, or suggestions that other people can fill.
## Functions
Make sure to add `, id` to a say function if you intend to send messages into discord. (If there is no message id because the command was not executed in discord it will send into public chat instead of discord.)

The functions have been added to be used instead of directly using the mineflayer functions. You have the following at your disposal or create your own:

**getTps()** - get estimate of tps

**say(text, id)** - Send a message into minecraft or discord, if id isn't null it will be sent into the channel with that id on discord, otherwise it's sent into minecraft. A global character limit for the say function exists, intended to prevent the bot from getting kicked.

**players()** - Shortcut for bot.players

**whisper(username, message)** - If you want to whisper to someone on the server, say('/msg player') works too, but this is a little nicer.

**uuid(username, callback)** - Calls back the uuid attributed to a username, if the server is cracked and specified in config, the uuid that's called back will just be the username and no uuid checking will be done. Please use onlineUUID instead, if you are only checking uuids when the player is online.

**getUsername(uuid, callback)** - Calls back the username attributed to a uuid, if a server is cracked it will just call back the uuid sent, which is just a username.

**onlineUUID(username)** - Only to be used when player is online, such as when executing commands, or logging messages, please use this function instead of uuid() as there is a limited amount of api querys that are allowed to be done to recieve uuid information.

**location()** Returns the bot's location in a string with format "X Y Z"

**exactLocation()** Shortcut for bot.entity.position

**time()** Shortcut for bot.time.timeOfDay

**health()** Shortcut for bot.health

**hunger()** Shortcut for bot.food

**getUptime()** Uptime of server in milliseconds

## Database related functions
The description is the second sql command executed (if the first one is ignored because data has already been written in the row)

**write(table, uuid, message, time)** `UPDATE ${table} SET message=?, time=? WHERE uuid=?`

**writeMessageOnly(table, uuid, message)** `UPDATE ${table} SET message=? WHERE uuid=?`

**updateKD(table, uuid, deaths, kills)** `UPDATE ${table} SET deaths=?, kills=? WHERE uuid=?`

**writeSeen(table, uuid, time)** `UPDATE ${table} SET time=? WHERE uuid=?`

**writeQuote(table, uuid, message, time)** `UPDATE ${table} SET json=? WHERE uuid=?`

**getMessage(table, uuid, callback)** `SELECT message, time FROM ${table} WHERE uuid = '${uuid}'`

**getMessageOnly(table, uuid, callback)** `SELECT message FROM ${table} WHERE uuid = '${uuid}'`

**getKD(table, uuid, callback)** `SELECT deaths, kills FROM ${table} WHERE uuid = '${uuid}'`

**getSeen(table, uuid, callback)** `SELECT time FROM ${table} WHERE uuid = '${uuid}'`

**getQuote(table, uuid, callback)** `SELECT json FROM ${table} WHERE uuid = '${uuid}'`
