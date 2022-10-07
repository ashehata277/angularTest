import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from './Services/translate/Languages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSubmenuModes: any;
  showFirstSubmenuModes: any;

  title = 'TestProject';
  constructor(private translate: TranslateService) {
    this.showSubmenuModes = [{
      name: 'onHover',
      delay: { show: 0, hide: 500 },
    }, {
      name: 'onClick',
      delay: { show: 0, hide: 300 },
    }];
    this.showFirstSubmenuModes = this.showSubmenuModes[1];
  }
  // Languagues(): Language[] {
  //   return this.lang.GetSupportedLanguages();
  // }


  changeSiteLanguage(localeCode: any): void {
    debugger;
    //   const selectedLanguage = this.lang.GetSupportedLanguages()
    //     .find((language) => language.Code === localeCode)
    //     ?.Lable.toString();
    //   if (selectedLanguage) {
    //     this.translate.use(localeCode);
    //   }
    //   const currentLanguage = this.translate.currentLang;
    //   console.log('currentLanguage', currentLanguage);
    // }
  }
}


