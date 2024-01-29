export interface IErrorsItem {
  location: string;
  msg: string;
  param: string;
  value: string;
}

export interface IErrorData {
  message: string;
  errors: IErrorsItem[] | [];
}

export interface IError {
  status: number;
  data: IErrorData;
}
