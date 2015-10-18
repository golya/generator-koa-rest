'use strict';
var <%= restCapitalName %> = require("../model/<%= restName %>");
var mysqldb = require('../mysqldb/');

module.exports.fetch_all = function *fetch_all() {
    this.body = yield <%= restCapitalName %>.find({});
};

module.exports.fetch = function *fetch() {
    this.body = yield <%= restCapitalName %>.findOne({_id: this.params.id}) || null;
};

module.exports.create = function *create() {
    var <%= restName %> = yield new <%= restCapitalName %>({
        name: 'test'
    }).save();
};