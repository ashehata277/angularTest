import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotAuthorizedComponentComponent } from "./Services/not-authorized-component/not-authorized-component.component";
import { AuthorizationGuard } from "./Services/RouterGaurds/AuthorizationGuard";
import { SignOutRedirectComponentComponent } from "./SignComponents/sign-out-redirect-component/sign-out-redirect-component.component";
import { SignRedirectComponentComponent } from "./SignComponents/sign-redirect-component/sign-redirect-component.component";



const appRoutes: Routes = [
    { path: 'signin-callback', component: SignRedirectComponentComponent },
    { path: 'signout-callback', component: SignOutRedirectComponentComponent },
    { path: 'AccessDenied', component: NotAuthorizedComponentComponent },
    {
        path: 'test-module',
        loadChildren: () => import('./Modules/test-module/test-module.module').then(m => m.TestModuleModule),
        canActivate: [AuthorizationGuard],
        data: { ModuleId: 201 }
    },
    {
      path: 'test-module-two',
      loadChildren: () => import('./Modules/test-module-two/test-module-two.module').then(m => m.TestModuleTwoModule),
      canActivate: [AuthorizationGuard],
      data: { ModuleId: 201 }
  }
]


@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
