import { ModuleValidatorTypes } from "./ValidatorsTypesEnum";

export class TestModuleValidator {
  Validate(form:any) : boolean{
    return false;
  };
  Type : ModuleValidatorTypes
}
