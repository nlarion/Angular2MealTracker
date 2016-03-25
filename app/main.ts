// First, we import a function called bootstrap from the Angular2 library. Then we load the component we just made by using the import {ComponentClassDefinitionName} from./path-to-file-name. Then, we pass theAppComponentinto thebootstrap` function.

import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'

bootstrap(AppComponent);
