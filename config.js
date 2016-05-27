requirejs.config({
    baseUrl: './src/',
    paths: {
        chinaPortal: './china-portal',
        jquery: '../node_modules/jquery/dist/jquery',
        angular: 'https://code.angularjs.org/1.4.8/angular',
        text: '../node_modules/requirejs-text/text'
    },
    shim: {
        angular : { exports : 'angular'}
    },
    priority: ["angular"],
    map: {
        '*': { 'jquery': 'jquery-private'},
        'jquery-private': { 'jquery': 'jquery'}
    }
});

requirejs(['chinaPortal']);
