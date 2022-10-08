import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import appRoutes from './appRoutes';
import { AppComponent } from './app.component';
import { TestSharedCompomentComponent } from './Shared/test-shared-compoment/test-shared-compoment.component';
import { OAuthService } from './Services/AuthService/OAuth2service';
import { ConfigurationReader } from './Services/CofigurationReader/ConfigurationReader';
import { NgxTranslateModule } from './Services/translate/translate.module';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DxCheckBoxModule, DxLookupModule, DxMenuModule, DxSelectBoxModule } from 'devextreme-angular';



@NgModule({
  declarations: [
    AppComponent,
    TestSharedCompomentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    NgxTranslateModule,
    FormsModule,
    BrowserAnimationsModule, 
    DxMenuModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxLookupModule
  ],
  providers: [OAuthService, ConfigurationReader],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getUrlFromConfiguration(reader: ConfigurationReader): string {
  return reader.Read('baseUrl');
}