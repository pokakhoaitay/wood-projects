/**
 * Created by Poka on 11/29/2015.
 */
/// <reference path="../typings/my-type.d.ts" />


//noinspection TypeScriptCheckImport
import {bootstrap, Component, View, NgFor, provide} from 'angular2/angular2';

//noinspection TypeScriptCheckImport
import {ROUTER_PROVIDERS
    , ROUTER_DIRECTIVES
    , RouteConfig
    , APP_BASE_HREF
    ,RouterLink
    ,RouterOutlet
    ,ROUTER_PRIMARY_COMPONENT
    ,LocationStrategy
    ,HashLocationStrategy
} from 'angular2/router';


import {Hero} from './heroModel'
import {Settings} from '../utils/settings'
import {AboutCmp} from '../about/about'
import {HomeCmp} from '../home/home'

@Component({
    selector: 'my-app',

})

@View ({
    templateUrl: 'src/app/app.php',
    directives: [ROUTER_DIRECTIVES, RouterLink],
})

@RouteConfig([
    {path: '/', as: 'HomeCmp', component: HomeCmp},
    {path: '/about', as: 'AboutCmp', component: AboutCmp}
])

export class AppCmp {
    myName:string;

    constructor() {
        this.myName = "Nguyen Hong Tron";
    }

    public hero:Hero = {
        id: 1,
        name: 'Windstorm'
    };

    public settings = Settings;

}
bootstrap(AppCmp, [
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, {useValue: '/'}),
    provide(LocationStrategy, {useClass: HashLocationStrategy})
])