import { Injectable, OnDestroy } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { SubSink } from "subsink";

@Injectable({ providedIn: 'root' })
export class RTLService  implements OnDestroy{
  public isRtlEnabled: boolean = false;
  private sub =  new SubSink();
  constructor(private translate: TranslateService) {

    this.sub.sink = this.translate.onLangChange.asObservable().subscribe(x => {
      if (this.translate.currentLang == 'ar')
        this.isRtlEnabled = true;
      else
        this.isRtlEnabled = false;
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }




}
