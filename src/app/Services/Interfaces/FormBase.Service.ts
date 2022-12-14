import { Injectable } from "@angular/core";
import { RTLService } from "../GlobalLanguageService/RTLService";
@Injectable()
export class FormServiceBase  {

  constructor(protected  rtlService: RTLService) {

  }
  LoadModuleData():  void{

  } ;


}
