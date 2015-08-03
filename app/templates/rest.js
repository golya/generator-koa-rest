'use strict';
var views = require('co-views');
var parse = require('co-body');
var <%= restName %>s = [];

var render = views(__dirname + '/../views', {
    map: { html: 'swig' }
});

module.exports.<%= restName %> = function *<%= restName %>() {
    this.body = yield render('<%= restName %>', { '<%= restName %>s': <%= restName %>s });
};

module.exports.fetch_all = function *list() {
    this.body = yield <%= restName %>s;
};

module.exports.fetch = function *fetch(id) {
    var <%= restName %> = <%= restName %>s[id];
    if (!<%= restName %>) {
        this.throw(404, '<%= restName %> with id = ' + id + ' was not found');
    }
    this.body = yield <%= restName %>;
};

module.exports.create = function *create() {
    var <%= restName %> = yield parse(this);
    var id = <%= restName %>s.push(<%= restName %>) - 1;
    <%= restName %>.id = id;
};