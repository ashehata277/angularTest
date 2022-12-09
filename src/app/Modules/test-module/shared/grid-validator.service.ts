import { Injectable } from '@angular/core';
import { RTLService } from 'src/app/Services/GlobalLanguageService/RTLService';
import { TestModuleValidator } from './test-module-validator';
import { ModuleValidatorTypes } from './ValidatorsTypesEnum';

@Injectable()
export class GridValidatorService implements TestModuleValidator<Object>{

  constructor(private rtlService:  RTLService) { }
  Validate(form: Object): boolean {
    console.log(this.rtlService);
    if (form === undefined || form === null)
      return false;
    else return true;
  }
  Type: ModuleValidatorTypes = ModuleValidatorTypes.GridValidator;
}
