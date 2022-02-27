function playMsg(username, args, message, id) {
    if (!args[0] && id) {
        say("> You didn't say a username to check.", id)
    } else {
        if (!args[0] && !id) {
            uuid(username, function (uuid) {
                getMessageOnly('savedmsgs', uuid, function (data) {
                    if (!data) {
                        say(`> Player hasn't saved a message with !savemsg.`, id)
                    } else {
                        say(`> ${username}: ${data.message}`, id)
                    }
                })
            })
        } else {
            if (args[0]) {
                uuid(args[0], function (uuid) {
                    getMessageOnly('savedmsgs', uuid, function (data) {
                        if (!data) {
                            say(`> Player hasn't saved a message with !savemsg.`, id)
                        } else {
                            say(`> ${username}: ${data.message}`, id)
                        }
                    })
                })
            }
        }
    }
}

module.exports = function (sayf, uuidf, msgonlyf) {
    say = sayf
    uuid = uuidf
    getMessageOnly = msgonlyf
    return playMsg;
}
