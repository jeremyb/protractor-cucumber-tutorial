exports.config = {
    baseUrl: 'http://localhost:3000',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        browserName: 'phantomjs',
        //'phantomjs.binary.path': './node_modules/phantomjs/bin/phantomjs',
        //'phantomjs.cli.args': '--debug=true --webdriver --webdriver-logfile=webdriver.log --webdriver-loglevel=DEBUG',
        version: '',
        platform: 'ANY'
    },

    framework: 'cucumber',

    specs: [
        'public/components/shop/features/*.feature'
    ],

    jasmineNodeOpts: {
        showColors: true
    },

    cucumberOpts: {
        require: 'public/components/shop/features/stepDefinitions.js',
        format: 'pretty' // or summary
    }
};
