// import { enableProdMode, ErrorHandler } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
// import { GlobalErrorHandlerService } from './app/Services/GlobalErrorHandler/global-error-handler.service';
// import { Toastrservice } from './app/Services/ToastrService/ToastrService';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
// platformBrowserDynamic().bootstrapModule(AppModule,{
//   providers: [
//     { provide: ErrorHandler, useClass: GlobalErrorHandlerService },

//     { provide: Toastrservice }
//   ],


// }).catch(err => console.error(err));




