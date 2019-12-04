var connection = require("../config/connection.js");

var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput +";";
        
        connection.query(queryString, function (err, data) {
            if (err) throw err;

            cb(data);
        });
    }
}

module.exports = orm;