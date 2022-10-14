import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class I18nServiceService implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    const http = this.inej.get(HttpClient);
    return http.get(`assets/i18n/${lang}.json`);
  }

  constructor(private inej: Injector) { }
}

