function saveMsg(username, args, raw, id) {
    if (id) {
        say("You can't save messages in discord!", id)
    } else {
        if (!args.join(" ")) {
            say("> You didn't say a message to save", id)
        } else {
            writeMessageOnly('savedmsgs', onlineUUID(username), args.join(" "))
            say(`> Saved message. Play it back with !playmsg`, id)
        }
    }
}

module.exports = function (sayFunc, uuid, wmo) {
    say = sayFunc;
    onlineUUID = uuid
    writeMessageOnly = wmo
    return saveMsg;
}
