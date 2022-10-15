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
import { BackComponent } from './Shared/back/back.component';
import { ConfigurationReader } from './Services/CofigurationReader/ConfigurationReader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nServiceService } from './Services/i18nService/i18n-service.service';
import { RTLService } from './Services/GlobalLanguageService/RTLService';
import { DxButtonModule, DxLookupModule } from 'devextreme-angular';
import {  HttpClientModule } from '@angular/common/http';
import { API_BASE_URL } from './Services/ClientService/client.service';
import { Toastrservice } from './Services/ToastrService/ToastrService';



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
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    DxButtonModule,
    DxLookupModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: I18nServiceService
      },
      isolate: false
    })
  ],
  providers: [
    {
      provide : API_BASE_URL,
      useFactory : getUrlFromConfiguration,
      deps: [ConfigurationReader]
    }, RTLService,Toastrservice],

  bootstrap: [AppComponent]
})
export class AppModule { }

export function getUrlFromConfiguration(reader: ConfigurationReader): string {
  return reader.Read('baseUrl');
}
