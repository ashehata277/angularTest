import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { DxButtonModule, DxLookupModule, DxPopupModule } from 'devextreme-angular';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './appRoutes';
import { API_BASE_URL } from './Services/ClientService/client.service';
import { ConfigurationReader } from './Services/CofigurationReader/ConfigurationReader';
import { RTLService } from './Services/GlobalLanguageService/RTLService';
import { I18nServiceService } from './Services/i18nService/i18n-service.service';
import { NotAuthorizedComponentComponent } from './Services/not-authorized-component/not-authorized-component.component';
import { Toastrservice } from './Services/ToastrService/ToastrService';
import { BackComponent } from './Shared/back/back.component';
import { HideAfterDirective } from './Shared/Directives/hiderAfter/hide-after.directive';
import { SignOutRedirectComponentComponent } from './SignComponents/sign-out-redirect-component/sign-out-redirect-component.component';
import { SignRedirectComponentComponent } from './SignComponents/sign-redirect-component/sign-redirect-component.component';
import { ConfirmPopupComponent } from './Shared/confirm-popup/confirm-popup.component';



@NgModule({
  declarations: [
    AppComponent,
    SignOutRedirectComponentComponent,
    SignRedirectComponentComponent,
    NotAuthorizedComponentComponent,
    BackComponent,
    HideAfterDirective,
    ConfirmPopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    DxButtonModule,
    DxLookupModule,
    DxPopupModule,
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
