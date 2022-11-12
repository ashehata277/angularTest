import { ModuleValidatorTypes } from "./ValidatorsTypesEnum";

export class TestModuleValidator<T> {
  Validate(form:T) : boolean{
    return false;
  };
  Type : ModuleValidatorTypes
}
