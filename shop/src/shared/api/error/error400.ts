import { IErrorData } from '../types';

type IError400 = ({ errors, message }: IErrorData) => void;

export const error400: IError400 = ({ errors, message: mess }) => {
  // if (mess === 'Ошибка валидации')
  //   return Modal.error({
  //     title: mess,
  //     content: errors[0].msg,
  //   });
  // if (mess === 'Неверный пароль' || mess === 'Пользователь не найден')
  //   return message.error('Неверный пользователь или пароль');

  // return Modal.error({
  //   title: `Неизвестная ошибка - ${mess}`,
  //   content: errors[0].msg,
  // });
};
