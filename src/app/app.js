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
var settings_1 = require('../utils/settings');
var AppComponent = (function () {
    function AppComponent() {
        this.hero = {
            id: 1,
            name: 'Windstorm'
        };
        this.settings = settings_1.Settings;
        this.myName = "Nguyen Hong Tron";
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            templateUrl: 'src/app/app.php'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map