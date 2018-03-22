"use strict";

const request = require("request");
class MerriamWebster {
    constructor(config) {
        this.key1 = config.key1;
        this.key2 = config.key2;
    }

    define(word, done) {
        let url = `https://www.dictionaryapi.com/api/v1/references/collegiate/xml/${word}?key=${this.key1}`
        request(
            {
                url: url
            },
            (err, response, body) => {
                if (err) {
                    return done(err);
                }
                return done(null, body);
            }
        );
    }
}

module.exports = MerriamWebster;
