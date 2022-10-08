import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Profile } from 'oidc-client';
import { Subject } from 'rxjs';
import { OAuthService } from './Services/AuthService/OAuth2service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  userAuthenticated: Subject<boolean> = new Subject<boolean>();
  isAuthenticatedUser : boolean =false;
  _user: string | undefined;
  title = 'TestProject';
  arabic = {
    Code: "ar", Lable: "Arabic"
  }
  english = {
    Code: "en", Lable: "English"
  }
  SupportedLanguages: { Code: string, Lable: string }[] = [];
  constructor(private translate: TranslateService,
    private _authService: OAuthService,private cdr: ChangeDetectorRef) {
    this.userAuthenticated.next(false);
    this.SupportedLanguages.push(this.arabic);
    this.SupportedLanguages.push(this.english);
    this.LoginChange();
    this._authService._loginChangedSubject.asObservable().subscribe(x => {
      this.LoginChange();
    });
    this.userAuthenticated.subscribe(x=>
      {
        this.isAuthenticatedUser = x;
      })

  }
  ngAfterViewInit(): void {
    this.cdr.detectChanges();
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



