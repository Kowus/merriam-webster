"use strict";

class MerriamWebster {
    constructor(config) {
        this.key = config.key;
        this.json = config.json || true;
    }

    displayConfig() {
        console.log(this.key, this.json);
    }
}

module.exports = MerriamWebster;
