'use strict';
var mongoose = require("mongoose");

var <%= restName %>Schema = new mongoose.Schema({
    'name': {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("<%= restCapitalName %>", <%= restName %>Schema);
