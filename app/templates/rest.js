'use strict';
var <%= restCapitalName %> = require("../model/<%= restName %>");
var mysqldb = require('../mysqldb/');

module.exports.fetch_all = function *fetch_all() {
    this.body = yield <%= restCapitalName %>.find({});
};

module.exports.fetch = function *fetch() {
    var fetched_<%= restName %> = yield <%= restCapitalName %>.findOne({_id: this.params.id}) || null;
    if (!fetched_<%= restName %>) {
        this.throw(404, '<%= restCapitalName %> with id = ' + id + ' was not found');
    }
    this.body = fetched_<%= restName %>;
};

module.exports.create = function *create() {
    var <%= restName %> = yield new <%= restCapitalName %>({
        name: 'test'
    }).save();
};