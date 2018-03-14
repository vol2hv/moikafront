import {LinksInner} from './entity_dto';

export class Cat extends LinksInner {
  id: number;
  name: string;
  weight?: number;
  bday?: Date;
  isCastrate?: boolean;
}
export interface ICat extends LinksInner {
  id: number;
  name: string;
  weight?: number;
  bday?: Date;
  isCastrate?: boolean;
}
