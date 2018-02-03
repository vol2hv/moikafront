import { Injectable } from '@angular/core';

@Injectable()
export class CityDtoService {

  constructor() { }

  getAll(): string {
    return 'Получен список Сity';
  }

}
