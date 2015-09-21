'use strict';
var superagent = require('supertest');
var assert = require('assert');
var app = require('../server');

var userAgent = superagent.agent(app.listen());
var user = {email: 'brand@test.com', password: 'test'};

describe('<%= restCapitalName %>', function () {
    beforeEach(function (done) {
        userAgent
            .post('/auth')
            .send(user)
            .expect(200)
            .end(function() {
                done();
            })
    });
    describe('GET /<%= restName %>/', function () {
        it('should return 200', function (done) {
            userAgent
                .get('/<%= restName %>')
                .expect(200)
                .end(function(err, result) {
                    assert.equal(result.status, 200);
                    done();
                })
        });

    });
});
