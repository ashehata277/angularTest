import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'TestProject';
  arabic = {
    Code: "ar", Lable: "Arabic"
  }
  english = {
    Code: "en", Lable: "English"
  }
  SupportedLanguages: { Code: string, Lable: string }[] = [];
  constructor(private translate: TranslateService) {
    this.SupportedLanguages.push(this.arabic);
    this.SupportedLanguages.push(this.english);
  }
  Languagues(): { Code: string, Lable: string }[] {
    return this.SupportedLanguages;
  }


  changeSiteLanguage(localeCode: string): void {
    const selectedLanguage = this.SupportedLanguages
      .find((language) => language.Code === localeCode)
      ?.Lable.toString();
    if (selectedLanguage) {
      this.translate.use(localeCode);
    }
    const currentLanguage = this.translate.currentLang;
    console.log('currentLanguage', currentLanguage);
  }
}



