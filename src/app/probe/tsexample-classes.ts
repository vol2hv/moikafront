interface IUser {
  id: number;
  name: string;
}
class User {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  toString(): string {
    return this.getInfo();
  }
  getInfo(): string {
    return 'id:' + this.id + ' name:' + this.name;
  }
}

export class TsexampleClasses {
  static main() {
    const user1: User = new User(1, 'Vovan');
    console.log(user1.getInfo());
    user1.name = 'Tatyana';
    console.log(user1.toString());
    const u2 = {id: 2, name: 'Tereza'};
    console.log(u2.toString());
    console.log(typeof(u2));
    const u3: User = <User>{id: 2, name: 'Tereza'};
    console.log(u3.toString());
    const str = JSON.stringify(user1);
    console.log(str);
    let u4: User = JSON.parse(str);
    console.log(u4.toString());
    u4 = <User>JSON.parse(str);
    console.log(u4.toString());
    console.log(typeof(u4));
    const u  = <IUser>JSON.parse(str);
    console.log('Через интерфейс: ', u , typeof (u.id));
  }
}
