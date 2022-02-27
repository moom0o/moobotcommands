
    function write(table, uuid, message, time) {
        if (uuid && uuid !== "undefined") {
            db.serialize(function () {
                let stmt = db.prepare(`INSERT OR IGNORE INTO ${table} (uuid, message, time) VALUES (?,?,?)`);
                stmt.run(uuid, message, time);
                stmt.finalize();
                let stmt2 = db.prepare(`UPDATE ${table} SET message=?, time=? WHERE uuid=?`);
                stmt2.run(message, time, uuid)
                stmt2.finalize();
            });
        }
    }

    function getMessage(table, uuid, callback) {
        db.get(`SELECT message, time FROM ${table} WHERE uuid = '${uuid}'`, function (err, data) {
            if (err) {
                console.log(err)
            } else {
                callback(data)
            }
        })
    }
