System.register(['angular2/platform/browser', 'angular2/router', 'angular2/http', 'angular2/core', './components/main/main'], function(exports_1) {
    var browser_1, router_1, http_1, core_1, main_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
            }],
        execute: function() {
            //bootstrap Application.
            browser_1.bootstrap(main_1.Main, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
        }
    }
});
//# sourceMappingURL=boot.js.map