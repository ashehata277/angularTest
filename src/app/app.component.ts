import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { SubSink } from 'subsink';
import { OAuthService } from './Services/AuthService/OAuth2service';
import { RTLService } from './Services/GlobalLanguageService/RTLService';
import { SafeData } from './Services/RouterGaurds/safeData';
import format from 'date-fns/format';
import compareDesc from 'date-fns/compareDesc';
import { arMA } from 'date-fns/locale';
import startOfDay from 'date-fns/startOfDay';
export interface testMapper {
  destionationProp1: string;
  destionationProp2: string;
  destionationProp3: string;
}
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
    this.checkMapper();
    this.TestDateFns();

  }
  TestDateFns() {
    debugger;
    let testDateOne = format(new Date(), 'yyyy/MM/dd', { locale: arMA });
    let datetoSort = [
      new Date(1995, 6, 2),
      new Date(1987, 1, 11),
      new Date(1989, 6, 10)
    ]

    console.log(format(startOfDay(new Date()), 'yyyy-MM-dd HH:mm:ss'));
    console.log(datetoSort.sort(compareDesc))
    console.log(testDateOne);
  }
  checkMapper() {
    let sourceObjectTest = {};
    sourceObjectTest['sourceProp1'] = 'value11';
    sourceObjectTest['sourceProp2'] = 'value21';
    sourceObjectTest['sourceProp3'] = 'value31';



    let sourceObjectTest2 = {};
    sourceObjectTest2['sourceProp1'] = 'value12';
    sourceObjectTest2['sourceProp2'] = 'value22';
    sourceObjectTest2['sourceProp3'] = 'value33';

    let arrayObjects = [sourceObjectTest, sourceObjectTest2];

    let configuration = {
      sourceProp1: 'destionationProp1',
      sourceProp2: 'destionationProp2',
      sourceProp3: 'destionationProp3',
    };

    let destionationObject = mapTwoObjects<testMapper>(sourceObjectTest, configuration);
    let destionationObjectArray = mapTwoArray<testMapper>(arrayObjects, configuration);
    destionationObject;
    destionationObjectArray;
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
    this._authService._loginChangedSubject.asObservable().subscribe(() => {
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



export function mapTwoObjects<T>(source: any, configuration: any): T {
  let sourcekeys: string[] = Object.keys(configuration);
  let destinationkeys: string[] = Object.values(configuration);
  let destinationObject = {};
  destinationkeys.forEach(key => {
    const indexofDestinationKey = destinationkeys.indexOf(key);
    const sourceKey = sourcekeys[indexofDestinationKey];
    destinationObject[key] = source[sourceKey];
  });
  return destinationObject as T;
}

export function mapTwoArray<T>(sources: any[], configuration: any): T[] {
  let destinations: any[] = [];
  sources.forEach(source => {
    let destination = mapTwoObjects<T>(source, configuration);
    destinations.push(destination);
  });
  return destinations as T[];
}



