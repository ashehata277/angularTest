import { Routes } from "@angular/router";
import { SignOutRedirectComponentComponent } from "./SignComponents/sign-out-redirect-component/sign-out-redirect-component.component";
import { SignRedirectComponentComponent } from "./SignComponents/sign-redirect-component/sign-redirect-component.component";



const appRoutes: Routes = [
    { path: 'signin-callback', component: SignRedirectComponentComponent },
    { path: 'signout-callback', component: SignOutRedirectComponentComponent },
    { path: 'test-module', loadChildren: () => import('./Modules/test-module/test-module.module').then(m => m.TestModuleModule) }
]

export default appRoutes;