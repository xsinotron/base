/**
 * @author alexis.collin@optimasoft.fr
 */
var requirejs = require('requirejs'),
    fs = require('fs'),
    config = {
        appDir:  '../',
        baseUrl: './js',
        dir:            '../public',
        mainConfigFile: '../js/app.js',
        removeCombined: true,
        fileExclusionRegExp: /(^r\.js$)|(^\.)|(^_build|^_dist|^public$|^doc$|^backbone$)|(^dev.php$)/,
        optimizeCss: 'standard',
        optimize: 'uglify2',
        logLevel: 0,
        modules: [
            {
                name: 'app'
            },
 
            {
                name: 'libs/Core',
                exclude: ['jquery']
            },
 
            {
                name: 'libs/Popin',
                exclude: ['jquery']
            }
        ]
    },
    deleteFolderRecursive = function (path) {
        if (fs.existsSync(path)) {
            fs.readdirSync(path).forEach(function (file, index) {
                var curPath = path + "/" + file;
                if (fs.statSync(curPath).isDirectory()) { // recurse
                    deleteFolderRecursive(curPath);
                } else { // delete file
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(path);
            return true;
        }
        return false;
    }
;
 
//  cleanup previous build dir
if( deleteFolderRecursive(config.dir) ) {
    console.log("\nold build directory deleted.");
}
 
// build
requirejs.optimize(config, function (buildResponse) {
    console.log("\nproject built in " + config.dir + ' :');
    console.log(buildResponse);
}, function(err) {
    console.log("\nerror creating build !");
    console.log(err);
});