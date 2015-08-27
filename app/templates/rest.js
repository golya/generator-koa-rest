'use strict';
var parse = require('co-body');
var <%= restName %> = [];

module.exports.<%= restName %> = function *<%= restName %>() {
    this.body = yield <%= restName %>;
};

module.exports.fetch_all = function *fetch_all() {
    this.body = yield <%= restName %>;
};

module.exports.fetch = function *fetch(id) {
    var fetched_<%= restName %> = <%= restName %>[id] || null;
    if (!fetched_<%= restName %>) {
        this.throw(404, '<%= restName %> with id = ' + id + ' was not found');
    }
    this.body = yield fetched_<%= restName %>;
};

module.exports.create = function *create() {
    var <%= restName %> = yield parse(this);
    var id = <%= restName %>.push(<%= restName %>) - 1;
    <%= restName %>.id = id;
};