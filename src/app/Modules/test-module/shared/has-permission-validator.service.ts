import { Injectable } from '@angular/core';
import { TestModuleValidator } from './test-module-validator';
import { ModuleValidatorTypes } from './ValidatorsTypesEnum';

@Injectable(

)
export class HasPermissionValidatorService implements TestModuleValidator<number> {

  constructor() { }
  Type: number = ModuleValidatorTypes.PermissionValidator ;
  Validate(form:number): boolean {
    debugger;
    return true;
  }
}
