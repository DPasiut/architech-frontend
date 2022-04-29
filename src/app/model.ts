
export interface User {
  login: string;
  password: string;
}

export interface RegisterUserResponse {
  message: string;
  userDto: User;
}
