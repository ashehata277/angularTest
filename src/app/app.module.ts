import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import appRoutes from './appRoutes';
import { AppComponent } from './app.component';
import { TestSharedCompomentComponent } from './Shared/test-shared-compoment/test-shared-compoment.component';
import { OAuthService } from './Services/AuthService/OAuth2service';
import { ConfigurationReader } from './Services/CofigurationReader/ConfigurationReader';

@NgModule({
  declarations: [
    AppComponent,
    TestSharedCompomentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [OAuthService,ConfigurationReader],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getUrlFromConfiguration(reader: ConfigurationReader): string {
  return reader.Read('baseUrl');
}