'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var KoaRestGenerator = yeoman.generators.Base.extend({
    constructor: function () {
        yeoman.Base.apply(this, arguments);
        this.argument('restname', { type: String, required: true });
        this.option('admin', { alias: '-a', type: String, default: 'mongodb' });
        this.option('modeltype', { type: String, defaults: 'mongodb' });
        this.option('ignoremodel', { type: String, defaults: false });
        this.option('ingoretest', { type: String, defaults: false });

    },

    generateController: function(){
        var context = {
            restName: this.restname,
            restCapitalName: this.restname[0].toUpperCase() + this.restname.slice(1)
        };

        var path = this.options.a ? "admin.js" : "server.js",
            file = this.readFileAsString(path);

        file += "var "+this.restname+" = require('./controllers/"+this.restname+"');\n";
        file += "router.get('/"+this.restname+"', auth.authed, "+this.restname+".fetch_all);\n";

        this.template("rest.js", "controllers/"+this.restname+".js", context);
        if (!this.options.ignoremodel) {
            switch(this.options.modeltype) {
                case 'mongodb':
                    this.template("model.js", "model/" + this.restname + ".js", context);
                    break;
                case 'mysql':
                    this.template("mysql_model.js", "mysqldb/models/" + this.restname + ".js", context);
                    break;
            }
        }

        if (!this.options.ingoretest) {
            this.template("spec.js", "test/" + this.restname + "Spec.js", context);
        }

        this.write(path, file);
    }
});

module.exports = KoaRestGenerator;
