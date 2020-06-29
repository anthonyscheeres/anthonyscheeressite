
export class AccountModel {


  token: String = localStorage.getItem('token');
  hasSuperPermission = false;

  constructor() { }

}
