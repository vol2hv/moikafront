import {TsexampleGenericClasses} from './tsexampleGenericClasses';

export class TsexampleGentricLambda {
  static main() {
    // this.functions();
    // this.lambdas();
    this.generics();
    TsexampleGenericClasses.main();
  }

  static functions() {
    // Функции
    function add(a: number, b: number, c?: number, d: number = 3) {
      let result: number = a + b;
      if (c) {
        result += c;
      }
      if (d) {
        result += d;
      }
      console.log(result);
    }

    function addNumbers(firstNumber: number, ...numberArray: number[]): number {
      let result = firstNumber;
      for (const x of numberArray) {
        result += x
      }
      ;
      return result;
    }

    add(20, 30); // 53
    add(10, 15, 100);   // 128

    console.log(addNumbers(2, 3, 5));  // 10
    // --- Переопределение функций ---
    function add1(x: string, y: string): string;
    function add1(x: number, y: number): number;
    function add1(x: any, y: any): any {
      return x + y;
    }

    const result1 = add1(5, 4);
    console.log(result1);   // 9
    const result2 = add1('5', '4');
    console.log(result2);   // 54
    // --- Переопределение функций 2 ---
    function getInfo(name: string): string;
    function getInfo(age: number): string;
    function getInfo(val: string | number): string {

      if (typeof val === 'string') {
        return 'Имя = ' + val;
      } else if (typeof val === 'number') {
        return 'Возраст = ' + val;
      } else {
        return 'undefined';
      }
    }

    console.log(getInfo('Tom'));
    console.log(getInfo(34));
  }

  static lambdas() {
    let operation: (x: number, y: number) => number;
    operation = function (x: number, y: number): number {
      return x + y;
    };
    console.log(operation(10, 20)); // 30
    operation = function (x: number, y: number): number {
      return x * y;
    };
    console.log(operation(10, 20)); // 200

    // Функции обратного вызова
    function mathOp(x: number, y: number, oper: (a: number, b: number) => number): number {
      const res = oper(x, y);
      return res;
    }

    let operationFunc: (x: number, y: number) => number;
    operationFunc = function (a: number, b: number): number {
      return a + b;
    }
    console.log(mathOp(10, 20, operationFunc)); // 30

    operationFunc = function (a: number, b: number): number {
      return a * b;
    }
    console.log(mathOp(10, 20, operationFunc)); // 200
    // тоже самое через стрелочные функции
    console.log(mathOp(10, 20, (x, y) => x + y)); // 30
    console.log(mathOp(10, 20, (x, y) => x * y)); // 200
    // -------------------------------------------------------
    // стрелочные функции
    const sum = (x: number, y: number) => x + y;
    let result = sum(15, 35); // 50
    console.log(result);

    const sumf = (x: number, y: number) => {
      x *= 2;
      return x + y;
    };
    result = sumf(15, 35); // 65
    console.log(result);
  }
  // Обобщенная функция
  static generics() {
    function getId<T>(id: T): T {
      return id;
    }
    const result = getId<number>(5);
    console.log(result);

    // обобщенный массив
    function getString<T>(arg: Array<T>): Array<T> {
      let res = '';
      for (let i = 0; i < arg.length; i++) {
        if (i > 0) {
          res += ',';
        }
        res += arg[i].toString();
      }
      console.log(res);
      return arg;
    }
    const res1 = getString<number>( [1, 2, 34, 5]);
    console.log(res1);
  }
}
