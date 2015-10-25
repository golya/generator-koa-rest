'use strict';
var mongoose = require("mongoose");

var <%= restName %>Schema = new mongoose.Schema({
    'name': {
        type: String,
        required: true
    },
    updated_at: {
        type: Date
    }
});

<%= restName %>Schema.pre('save', function(done) {
    this.updated_at = new Date();
    done();
});
module.exports = mongoose.model("<%= restCapitalName %>", <%= restName %>Schema);
