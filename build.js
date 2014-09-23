var fs = require('fs');
var requirejs = require('requirejs');
var lib_name = 'henka';

var config = {
    baseUrl: 'src',
    name: lib_name,
    out: 'dist/'+ lib_name + '-min.js',
    gunbai: 'src/gunbai/dist/gunbai.min.js'
};

requirejs.optimize(config, function (buildResponse) {

    //this appends turns the lib def into a returnable RequireJS
    //module, also used by gunbai to execute standalone
    var appends = [
        'define(["',
            lib_name,
        '"], function (',
            lib_name,
        ') { return ',
            lib_name,
        '; });'
    ];

    //append gunbai to henka to add standalone capabilities
    fs.appendFile(config.out, appends.join(''), function (err) {
      if (err) throw err;

        var out = [
            config.gunbai,
            config.out
        ].map(function(filePath){
            return fs.readFileSync(filePath, 'utf-8');
        });

        fs.writeFileSync(config.out, out.join(''), 'utf-8');

        console.log(lib_name + ' has been built!');
    });

}, function(err) {
    //optimization err callback
});