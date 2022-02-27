function ping(username, args, raw, id) {
    if (!args[0] && id) {
        return say(`> You didn't say a username to check`, id)
    }
    if (!args[0]) {
        if (players()[username].ping === 0) {
            say(`> ${username}: Server hasn't calculated ping yet.`, id)
        } else {
            say(`> ${username}: ${players()[username].ping}ms`, id)
        }
    } else {
        if (!players()[args[0]]) {
            say(`> ${args[0]}: Player not online`, id)
        } else {
            if (players()[args[0]].ping === 0) {
                say(`> ${args[0]}: Server hasn't calculated ping yet.`, id)
            } else {
                say(`> ${args[0].substring(0, 50)}'s ping is ${players()[args[0]].ping}`, id)
            }
        }
    }
}

module.exports = function (sayFunc, playersFunc) {
    say = sayFunc;
    players = playersFunc
    return ping;
}
