/**
 * Created by Poka on 11/29/2015.
 */
/// <reference path="../typings/my-type.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//noinspection TypeScriptCheckImport
var angular2_1 = require('angular2/angular2');
//noinspection TypeScriptCheckImport
var router_1 = require('angular2/router');
var settings_1 = require('../utils/settings');
var about_1 = require('../about/about');
var home_1 = require('../home/home');
var AppCmp = (function () {
    function AppCmp() {
        this.hero = {
            id: 1,
            name: 'Windstorm'
        };
        this.settings = settings_1.Settings;
        this.myName = "Nguyen Hong Tron";
    }
    AppCmp = __decorate([
        angular2_1.Component({
            selector: 'my-app',
        }),
        angular2_1.View({
            templateUrl: 'src/app/app.php',
            directives: [router_1.ROUTER_DIRECTIVES, router_1.RouterLink],
        }),
        router_1.RouteConfig([
            { path: '/', as: 'HomeCmp', component: home_1.HomeCmp },
            { path: '/about', as: 'AboutCmp', component: about_1.AboutCmp }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppCmp);
    return AppCmp;
})();
exports.AppCmp = AppCmp;
angular2_1.bootstrap(AppCmp, [
    router_1.ROUTER_PROVIDERS,
    angular2_1.provide(router_1.APP_BASE_HREF, { useValue: '/' }),
    angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
]);
//# sourceMappingURL=app.js.map