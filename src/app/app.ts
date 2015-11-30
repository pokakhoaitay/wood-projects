/**
 * Created by Poka on 11/29/2015.
 */

//noinspection TypeScriptCheckImport
import {bootstrap, Component} from 'angular2/angular2';

@Component({
    selector:'my-app',
    template:'<h1>My first Angular 2 app</h1>',
})

class   AppComponent{}
bootstrap(AppComponent)