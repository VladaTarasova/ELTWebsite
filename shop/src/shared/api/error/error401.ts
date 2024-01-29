// import { message, Modal } from 'antd';
import { IErrorData } from '../types';

type IError401 = ({ errors, message }: IErrorData) => void;

export const error401: IError401 = ({ errors, message: mess }) => {
  // if (mess === 'Пользователь не авторизован') return message.error(mess);
  // return Modal.error({
  //   title: `Неизвестная ошибка - ${mess}`,
  //   content: errors[0].msg,
  // });
};
