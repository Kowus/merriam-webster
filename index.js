"use strict";

class MerriamWebster {
    constructor(config) {
        this.key1 = config.key1;
        this.key2 = config.key2;
    }

    define(word) {
        console.log(`DEFINITION of ${word}`);
    }
}

module.exports = MerriamWebster;
