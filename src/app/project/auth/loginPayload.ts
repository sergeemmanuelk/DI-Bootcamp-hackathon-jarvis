export class LoginPayload {
  email: string;
  password: string;
  constructor() {
    this.email = 'serge_em@outlook.fr';
    this.password = `${new Date().getTime()}`;
  }
}
