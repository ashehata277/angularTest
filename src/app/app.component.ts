import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { OAuthService } from './Services/AuthService/OAuth2service';
import { RTLService } from './Services/GlobalLanguageService/RTLService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  userAuthenticated: Subject<boolean> = new Subject<boolean>();
  isAuthenticatedUser: boolean = false;
  _user: string | undefined;
  title = 'TestProject';
  arabic = {
    Code: "ar", LabelEn: "Arabic" , LabelAr: 'العربيه'
  }
  english = {
    Code: "en", LabelEn: "English" , LabelAr: 'الانجليزيه'
  }
  SupportedLanguages: { Code: string, LabelEn: string , LabelAr:string}[] = [];
  lastLanguageCode: string | null;
  public displayTextLang :string = "LabelEn";


  constructor(private translate: TranslateService,
    private _authService: OAuthService,
    private cdr: ChangeDetectorRef,
    public rtlService: RTLService) {
    this.SetPageDirection();
    this.userAuthenticated.next(false);
    this.AddSupportedLanguages();
    this.LoginChange();
    this.AuthenicationSubscriber();
    this.SetTransalteService();
  }
  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }
  Languagues(): { Code: string, LabelEn: string  ,LabelAr:string}[] {
    return this.SupportedLanguages;
  }
  private SetPageDirection = () => {
    const lastSelectedLanguage = localStorage.getItem('SelectedLanguage');
    if (lastSelectedLanguage) {
      document.dir = lastSelectedLanguage === 'en' ? 'ltr' : 'rtl';
      this.displayTextLang  = lastSelectedLanguage === 'en' ? "LabelEn" : "LabelAr";
    }
    else {
      document.dir = 'ltr';
      this.displayTextLang = "LabelEn";
    }
  }
  private SetTransalteService = () => {
    this.lastLanguageCode = localStorage.getItem("SelectedLanguage");
    if (this.lastLanguageCode !== null) {
      this.translate.use(this.lastLanguageCode as string)
    }
    else {
      this.lastLanguageCode = "en";
    }
  }
  private AuthenicationSubscriber = () =>{
    this._authService._loginChangedSubject.asObservable().subscribe(x => {
      this.LoginChange();
    });
    this.userAuthenticated.subscribe(x => {
      this.isAuthenticatedUser = x;
    });
  }
  private AddSupportedLanguages = () =>{
    this.SupportedLanguages.push(this.arabic);
    this.SupportedLanguages.push(this.english);
  }

  changeSiteLanguage(localeCode: string): void {
    const selectedLanguage = this.SupportedLanguages
      .find((language) => language.Code === localeCode);
    if (selectedLanguage) {
      this.translate.use(localeCode);
    }
    localStorage.setItem("SelectedLanguage", localeCode);
    this.displayTextLang  = localeCode === 'en' ? "LabelEn" : "LabelAr";
    document.dir = localeCode === 'en' ? 'ltr' : 'rtl';
  }

  public LoginChange() {
    this._authService.GetUser()
      .then(x => {

        this._user = x?.profile['name'];
        const isAuthenticated = this._authService.checkUser(x);
        this.userAuthenticated.next(isAuthenticated);
        if (isAuthenticated) {
        }
      });
  }
  public login = () => {
    this._authService.login();
  }
  public logout = () => {
    this._authService.logout();
  }
}



