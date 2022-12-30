import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { SubSink } from 'subsink';
import { OAuthService } from './Services/AuthService/OAuth2service';
import { RTLService } from './Services/GlobalLanguageService/RTLService';
import { SafeData } from './Services/RouterGaurds/safeData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, SafeData, OnDestroy {
  userAuthenticated: Subject<boolean> = new Subject<boolean>();
  isAuthenticatedUser: boolean = false;
  _user: string | undefined;
  title = 'TestProject';
  lastLanguageCode: string | null;

  constructor(private translate: TranslateService,
    private _authService: OAuthService,
    private cdr: ChangeDetectorRef,
    public rtlService: RTLService) {
    this.SetPageDirection();
    this.userAuthenticated.next(false);
    this.LoginChange();
    this.AuthenicationSubscriber();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  isDataSafe(): boolean {
    return false;
  }
  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }
  private sub = new SubSink();
  Languagues$: BehaviorSubject<{ Id: number, text: string }[]> = new BehaviorSubject<{ Id: number, text: string }[]>([{
    Id: 1, text: this.translate.instant("LangNameAr")
  }, {
    Id: 2, text: this.translate.instant("LangNameEn")
  }]);

  private SetPageDirection = () => {
    const lastSelectedLanguage = localStorage.getItem('SelectedLanguage');
    if (lastSelectedLanguage) {
      this.sub.sink = this.translate.use(lastSelectedLanguage?.toString() ?? 'en').subscribe({
        next: () => this.Languagues$.next([{
          Id: 1, text: this.translate.instant("LangNameAr")
        }, {
          Id: 2, text: this.translate.instant("LangNameEn")
        }])
      });
      document.dir = lastSelectedLanguage === 'en' ? 'ltr' : 'rtl';
    }
    else {
      this.translate.use('en');
      document.dir = 'ltr';
    }
  }
  private AuthenicationSubscriber = () => {
    this._authService._loginChangedSubject.asObservable().subscribe(x => {
      this.LoginChange();
    });
    this.userAuthenticated.subscribe(x => {
      this.isAuthenticatedUser = x;
    });
  }
  changeSiteLanguage(selected: any) {
    const localeCode = selected.itemData.Id === 1 ? 'ar' : 'en';
    if (localeCode) {
      this.translate.use(localeCode);
    }
    localStorage.setItem("SelectedLanguage", localeCode);
    window.location.reload();
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



