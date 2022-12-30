import { ModuleValidatorTypes } from "./ValidatorsTypesEnum";

export class TestModuleValidator<T> {
  Validate(value:T) : boolean{
    return false;
  };
  Type : ModuleValidatorTypes
}
