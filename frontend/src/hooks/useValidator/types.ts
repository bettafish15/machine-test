import { validationMethodsWithDates, validationMethodsWithoutParams, validationMethodsWithParams } from "utils/validations";

export interface IValidatorData {
  [k: string]: string | number | boolean | Date;
}

export interface IRules {
  [k: string]: IRule;
}

type IRuleWithParam = {
  [k in TypeRuleWithParameter]?: number;
};

type IRuleWithoutParam = {
  [k in TypeRuleWithoutParameter]?: boolean;
};

type IRuleWithDates = {
  [k in TypeRuleWithDates]?: keyof IRules;
};

type IRule = IRuleWithParam | IRuleWithoutParam | IRuleWithDates;

export interface IDataForCheck<Fields> {
  value: Fields[keyof Fields];
  fieldRules: IRule;
  fields?: Fields;
}

type TypeRuleMethods = TypeRuleWithoutParameter | TypeRuleWithParameter | TypeRuleWithDates;

type TypeRuleWithoutParameter = keyof typeof validationMethodsWithoutParams;
type TypeRuleWithParameter = keyof typeof validationMethodsWithParams;
type TypeRuleWithDates = keyof typeof validationMethodsWithDates;

export interface IValidationResponse {
  status: boolean;
  errorMessage?: string;
}

export type IErrorsMessages<DefaultFields> = {
  [k in keyof DefaultFields]?: string;
}
