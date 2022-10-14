import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import appRoutes from './appRoutes';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignOutRedirectComponentComponent } from './SignComponents/sign-out-redirect-component/sign-out-redirect-component.component';
import { SignRedirectComponentComponent } from './SignComponents/sign-redirect-component/sign-redirect-component.component';
import { ToastrModule } from 'ngx-toastr';
import { NotAuthorizedComponentComponent } from './Services/not-authorized-component/not-authorized-component.component';
import { SharedModuleModule } from './Services/SharedModule/shared-module/shared-module.module';
import { NgxTranslateModule } from './Services/translate/translate.module';
import { BackComponent } from './Shared/back/back.component';
import { Toastrservice } from './Services/ToastrService/ToastrService';
import type { ConfigurationReader } from './Services/CofigurationReader/ConfigurationReader';



@NgModule({
  declarations: [
    AppComponent,
    SignOutRedirectComponentComponent,
    SignRedirectComponentComponent,
    NotAuthorizedComponentComponent,
    BackComponent
  ],
  imports: [
    BrowserModule,
    SharedModuleModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers:[],

  bootstrap: [AppComponent]
})
export class AppModule { }

export function getUrlFromConfiguration(reader: ConfigurationReader): string {
  return reader.Read('baseUrl');
}
