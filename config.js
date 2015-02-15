exports.config = {
    baseUrl: 'http://localhost:3000',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        browserName: 'phantomjs',
        version: '',
        platform: 'ANY'
    },

    framework: 'cucumber',

    specs: [
        'features/*.feature'
    ],

    jasmineNodeOpts: {
        showColors: true
    },

    cucumberOpts: {
        require: 'features/stepDefinitions.js',
        format: 'pretty' // or summary
    }
};
