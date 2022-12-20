import { Injectable, OnDestroy } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { from, map, Observable, tap } from "rxjs";
import { OAuthService } from "../AuthService/OAuth2service";
import { Toastrservice } from "../ToastrService/ToastrService";

@Injectable({ providedIn: 'root' })
export class AuthorizationGuard implements CanActivate, OnDestroy {
  constructor(private authService: OAuthService,
    private router: Router,
    private toastr: Toastrservice,
    private translate: TranslateService) {

  }
  ngOnDestroy(): void {
  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const moduleId = route.data['ModuleId'];
    if (!moduleId) {
      this.toastr.error(this.translate.instant('routingModuleErrorMsg'), this.translate.instant('routingModuleErrortitle'));
      return false;
    }
    if (this.authService.isUserAuthenticaed) {
      return from(this.authService.GetUser())
        .pipe(tap(x => {
          if (x?.profile["ClientType"] !== "Angular") {
            this.toastr.error("Client Type Not Correct Call Support","Invalid Client");
          }
        })).pipe(map(x => x?.profile["ClientType"] === "Angular"));
    }
    else {
      this.router.navigate(['/AccessDenied']);
      return false;
    }
  }
}
