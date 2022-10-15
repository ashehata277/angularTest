import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable({ providedIn: 'root' })
export class RTLService {
    public isRtlEnabled: boolean = false;

    constructor(private translate: TranslateService) {

        this.translate.onLangChange.asObservable().subscribe(x => {
            if (this.translate.currentLang == 'ar')
                this.isRtlEnabled = true;
            else
            this.isRtlEnabled =false;
        });
    }




}
