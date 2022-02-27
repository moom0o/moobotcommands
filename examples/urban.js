const unirest = require("unirest")

function urban(username, args, raw, id) {
    if (!args.join(" ")) {
        say("> You didn't say a query", id)
    } else {
        var req = unirest("GET", "https://mashape-community-urban-dictionary.p.rapidapi.com/define");

        req.query({
            "term": args.join(" ")
        });

        req.headers({
            "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
            "x-rapidapi-key": "FUCKOFF"
        });

        req.end(function (res) {
            if (res.error) {
                console.log(res.error);
            } else {
                if (!res.body.list[0]) {
                    say(`> No definition for that query.`, id)
                } else {
                    say(`> ${res.body.list[0].definition.substring(0, 240).replace(/\n/g, " ").replace(/\u000d/g, " ")}`, id);
                }
            }
        });
    }
}

module.exports = function (sayFunc) {
    say = sayFunc;
    return urban;
}
