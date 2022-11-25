import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { from, Observable } from "rxjs";
import { OAuthService } from "../AuthService/OAuth2service";
import { Toastrservice } from "../ToastrService/ToastrService";

@Injectable({ providedIn: 'root' })
export class AuthorizationGuard implements  CanActivate {
  constructor(private authService: OAuthService,
    private router: Router,
    private toastr: Toastrservice,
    private translate: TranslateService) {

  }
  canActivate(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const moduleId = route.data['ModuleId'];
    if (!moduleId) {
      this.toastr.error(this.translate.instant('routingModuleErrorMsg'), this.translate.instant('routingModuleErrortitle'));
      return false;
    }
    if (this.authService.isUserAuthenticaed) {
      from(this.authService.GetUser())
      .subscribe(x=>{
        console.log(x?.profile);
      });

      return true;
    }
    else {
      this.router.navigate(['/AccessDenied']);
      return false;
    }
  }
  // canActivateChild(childRoute: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

  //   const moduleId = childRoute.data['ModuleId'];
  //   if (!moduleId) {
  //     this.toastr.error(this.translate.instant('routingModuleErrorMsg'), this.translate.instant('routingModuleErrortitle'));
  //     return false;
  //   }
  //   if (this.authService.isUserAuthenticaed) {
  //     return true;
  //   }
  //   else {
  //     this.router.navigate(['/AccessDenied']);
  //     return false;
  //   }
  // }


}
