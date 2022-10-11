import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import {  Observable } from "rxjs";
import { OAuthService } from "../AuthService/OAuth2service";

@Injectable({ providedIn: 'root' })
export class AuthorizationGuard implements CanActivate {
    constructor(private authService: OAuthService, private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot)
        : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.authService.isUserAuthenticaed) {
            return true;
        }
        else {
            this.router.navigate(['/AccessDenied']);
            return false;
        }
    }

}