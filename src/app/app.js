var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
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
            templateUrl: 'src/app/app.html',
            directives: [router_1.ROUTER_DIRECTIVES, router_1.RouterLink],
        }),
        router_1.RouteConfig([
            { path: '/', as: 'HomeCmp', component: home_1.HomeCmp },
            { path: '/home', as: 'HomeCmp', component: home_1.HomeCmp },
            { path: '/about', as: 'AboutCmp', component: about_1.AboutCmp }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppCmp);
    return AppCmp;
})();
exports.AppCmp = AppCmp;
angular2_1.bootstrap(AppCmp, [
    router_1.ROUTER_PROVIDERS,
    angular2_1.provide(router_1.APP_BASE_HREF, { useValue: '/wood-projects' }),
]);
//# sourceMappingURL=app.js.map