'use strict';
var superagent = require('supertest');
var assert = require('assert');
var app = require('../server');

var userAgent = superagent.agent(app.listen());

describe('<%= restCapitalName %>', function () {
    describe('GET /<%= restName %>/', function () {
        it('should return 200', function (done) {
            userAgent
                .get('/<%= restName %>')
                .expect(200)
                .end(function(err, result) {
                    done();
                })
        });

    });
});
