'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var KoaRestGenerator = yeoman.generators.Base.extend({
    constructor: function () {
        yeoman.Base.apply(this, arguments);
        this.argument('restname', { type: String, required: true });
        this.argument('ignoremodel', { type: String, required: true, default: true });
        this.argument('ingoretest', { type: String, required: true, default: true });
    },

    generateController: function(){
        var context = {
            restName: this.restname,
            restCapitalName: this.restname[0].toUpperCase() + this.restname.slice(1)
        };

        var path = "server.js",
            file = this.readFileAsString(path);

        file += "var "+this.restname+" = require('./controllers/"+this.restname+"');\n";
        file += "router.get('/"+this.restname+"', auth.authed, "+this.restname+".fetch_all);\n";
        
        this.template("rest.js", "controllers/"+this.restname+".js", context);
        if (!this.ignoremodel) {
            this.template("model.js", "model/" + this.restname + ".js", context);
        }

        if (!this.ingoretest) {
            this.template("spec.js", "test/" + this.restname + "Spec.js", context);
        }

        this.write(path, file);
    }
});

module.exports = KoaRestGenerator;
