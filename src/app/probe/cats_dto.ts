import {LinksInner} from './entity_dto';

export class Cat {
  id: number;
  name: string;
  weight?: number;
  bday?: Date;
  isCastrate?: boolean;
  constructor() {}
}
export interface ICat extends LinksInner {
  id: number;
  name: string;
  weight?: number;
  bday?: Date;
  isCastrate?: boolean;
}
