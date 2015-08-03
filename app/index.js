'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var KoaRestGenerator = yeoman.generators.Base.extend({
    constructor: function () {
        yeoman.Base.apply(this, arguments);
        this.argument('restname', { type: String, required: true });
    },

    generateController: function(){
        var context = {
            restName: this.restname
        };
        this.template("rest.js", "controllers/"+this.restname+".js", context);
    }
});

module.exports = KoaRestGenerator;
