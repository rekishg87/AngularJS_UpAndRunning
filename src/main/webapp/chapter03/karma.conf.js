/**
 * Created by Rekish on 19-8-2015.
 */

module.exports = function(config) {
    config.set({
        // Base path that will be used to resolve files and exclude
        basePath: '',

        // Testing framework tu use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],

        // List of files / patterns to load in the browser
        files: [
            // 'angular.mis.js',
            // 'angular-mocks.js',
            'controller.js',
            //'simpleSpec.js',
            'controllerSpec.js'
        ],

        // List of files / patterns to exclude
        exclude: [],

        // Web server port
        port: 8080,

        // Level of logging
        // Possible values: LOG_DISABLE || LOG_ERROR
        //                  LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // Enable / disable watching file and executing tests
        // whenever any file changes
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, it captures browsers, runs test, and exits
        singleRun: false
    });
};
