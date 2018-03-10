interface IUser {
  getInfo();
}
class User implements IUser {
  _id: number;
  _name: string;
  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
  }
  getInfo() {
    console.log('id: ' + this._id + '; name: ' + this._name);
  }
}

class Employee extends User {
  _company: string;
  constructor(id: number, name: string, company: string) {
    super(id, name);
    this._company = company;
  }
  getInfo() {
    console.log('id: ' + this._id + '; name: ' + this._name + '; company:' + this._company);
  }
}

class UserInfo<T extends IUser> {
  getUserInfo(user: T): void {
    user.getInfo();
  }
}

export class TsexampleGenericClasses {
  static main() {
    const tom = new User(3, 'Tom');
    const alice = new Employee(4, 'Alice', 'Microsoft');
    const userStore = new UserInfo();
    userStore.getUserInfo(tom);
    userStore.getUserInfo(alice);
  }
}
