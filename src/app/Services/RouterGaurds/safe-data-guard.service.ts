import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { firstValueFrom, Observable, of } from 'rxjs';
import { ConfirmPopupComponent } from 'src/app/Shared/confirm-popup/confirm-popup.component';
import { SafeData } from './safeData';

@Injectable({
  providedIn: 'root'
})
export class SafeDataGuardService implements CanDeactivate<SafeData> {

  constructor(private confirmPopupComponent : ConfirmPopupComponent) { }
  canDeactivate(component: SafeData, currentRoute: ActivatedRouteSnapshot,
     currentState: RouterStateSnapshot,
      nextState?: RouterStateSnapshot | undefined):
       boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const isSafed = component.isDataSafe();
        if(isSafed===true){
          // return firstValueFrom(of(true));
          return Promise.resolve(true);
        }
        else {
          this.confirmPopupComponent.isVisible=true;
          return firstValueFrom(this.confirmPopupComponent.resultEventEmitter);
        }
  }
}
