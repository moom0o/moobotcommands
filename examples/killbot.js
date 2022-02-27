const config = require("../config.json")

function killBot(username, args, message, id) {
    if (config.AlternativeKillCommand) {
        say("> Attempting to run packets to kill bot", id)
        writePacket()
    } else {
        say("> Attempting to run /kill", id)
        say("/kill")
    }
}

module.exports = function (sayf, exactLocation, writePacketf) {
    say = sayf
    elocation = exactLocation
    writePacket = writePacketf
    return killBot;
}
