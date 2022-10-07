import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestSharedCompomentComponent } from './Shared/test-shared-compoment/test-shared-compoment.component';

@NgModule({
  declarations: [
    AppComponent,
    TestSharedCompomentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
