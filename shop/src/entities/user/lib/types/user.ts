export interface IUserDto {
  id: string;
  email: string;
}

export interface IUserState {
  user: IUserDto | null;
  isLogout?: boolean;
}
