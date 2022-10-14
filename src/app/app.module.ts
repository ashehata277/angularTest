import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import appRoutes from './appRoutes';
import { AppComponent } from './app.component';
import { ConfigurationReader } from './Services/CofigurationReader/ConfigurationReader';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignOutRedirectComponentComponent } from './SignComponents/sign-out-redirect-component/sign-out-redirect-component.component';
import { SignRedirectComponentComponent } from './SignComponents/sign-redirect-component/sign-redirect-component.component';
import { ToastrModule } from 'ngx-toastr';
import { NotAuthorizedComponentComponent } from './Services/not-authorized-component/not-authorized-component.component';
import { SharedModuleModule } from './Services/SharedModule/shared-module/shared-module.module';
import { NgxTranslateModule } from './Services/translate/translate.module';
import { DxButtonComponent, DxButtonModule, DxLookupModule } from 'devextreme-angular';
import { BackComponent } from './Shared/back/back.component';



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
    ToastrModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getUrlFromConfiguration(reader: ConfigurationReader): string {
  return reader.Read('baseUrl');
}