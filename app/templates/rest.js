'use strict';
var <%= restName %> = require("../model/<%= restName %>");

module.exports.fetch_all = function *fetch_all() {
    this.body = yield <%= restName %>.find({});
};

module.exports.fetch = function *fetch(id) {
    var fetched_<%= restName %> = yield <%= restName %>.findOne({_id: id}) || null;
    if (!fetched_<%= restName %>) {
        this.throw(404, '<%= restName %> with id = ' + id + ' was not found');
    }
    this.body = fetched_<%= restName %>;
};

module.exports.create = function *create() {
    <%= restName %>.id = <%= restName %>.save();
};