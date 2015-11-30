/**
 * Created by Poka on 11/29/2015.
 */

//noinspection TypeScriptCheckImport
import {bootstrap, Component, View} from 'angular2/angular2';
import {Settings} from '../utils/settings'
@Component({
    selector: 'my-app'

})

@View ({
    templateUrl: 'src/app/app.php'
})

class AppComponent {
}
bootstrap(AppComponent)