import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import appRoutes from './appRoutes';
import { AppComponent } from './app.component';
import { OAuthService } from './Services/AuthService/OAuth2service';
import { ConfigurationReader } from './Services/CofigurationReader/ConfigurationReader';
import { NgxTranslateModule } from './Services/translate/translate.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DxButtonModule, DxCheckBoxModule, DxLookupModule, DxMenuModule, DxSelectBoxModule } from 'devextreme-angular';
import { SignOutRedirectComponentComponent } from './SignComponents/sign-out-redirect-component/sign-out-redirect-component.component';
import { SignRedirectComponentComponent } from './SignComponents/sign-redirect-component/sign-redirect-component.component';
import { ToastrModule } from 'ngx-toastr';
import { Toastrservice } from './Services/ToastrService/ToastrService';
import { RTLService } from './Services/GlobalLanguageService/RTLService';
import { FormStateService } from './Services/FormStateService/FormStateService';



@NgModule({
  declarations: [
    AppComponent,
    SignOutRedirectComponentComponent,
    SignRedirectComponentComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgxTranslateModule,
    FormsModule,
    BrowserAnimationsModule, 
    DxMenuModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxLookupModule,
    DxButtonModule,
    ToastrModule.forRoot() 
  ],
  providers: [OAuthService, ConfigurationReader,Toastrservice,RTLService,FormStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getUrlFromConfiguration(reader: ConfigurationReader): string {
  return reader.Read('baseUrl');
}