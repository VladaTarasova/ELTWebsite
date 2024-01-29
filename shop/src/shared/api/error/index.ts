import { IError } from '../types';
import { error400 } from './error400';
import { error401 } from './error401';

type ApiError = ({ status, data }: IError) => void;

export const ApiError: ApiError = ({ status, data }) => {
  if (status === 400) error400(data);
  if (status === 401) error401(data);
};
