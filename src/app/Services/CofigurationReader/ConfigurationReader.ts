import { Injectable, isDevMode } from "@angular/core";
import ProductionConfiguration from "../../../assets/Appsettingsdeployment.json";
import DevelopingConfiguration from "../../../assets/Appsettingsdevelopement.json";


@Injectable({providedIn:'root'})
export class ConfigurationReader {
    constructor() {

    }
    Read(key: string): string {
        if (isDevMode()) {
            const jsondata = JSON.parse(JSON.stringify(DevelopingConfiguration));
            return jsondata[key];
        }
        else {
            const jsondata = JSON.parse(JSON.stringify(ProductionConfiguration));
            return jsondata[key];
        }
    }






}
