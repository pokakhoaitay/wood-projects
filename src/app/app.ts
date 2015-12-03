/**
 * Created by Poka on 11/29/2015.
 */
/// <reference path="../typings/my-type.d.ts" />


//noinspection TypeScriptCheckImport
import {bootstrap, Component, View} from 'angular2/angular2';

import {Hero} from './heroModel'
import {Settings} from '../utils/settings'

@Component({
    selector: 'my-app'

})

@View ({
    templateUrl: 'src/app/app.php'
})


export class AppComponent {

    myName:string;

    constructor() {
        this.myName = "Nguyen Hong Tron";

    }

    public hero:Hero = {
        id: 1,
        name: 'Windstorm'
    };

public settings=Settings;

}
bootstrap(AppComponent)