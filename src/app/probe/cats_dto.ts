export class Cat {
  id: number;
  name: string;
  weight?: number;
  bday?: Date;
  isCastrate?: boolean;

  constructor() {}
}
export interface CatListDto {
  _embedded: CatListDtoWithoutLinks ;
  _links: Links;
}
export interface CatListDtoWithoutLinks {
  cats: CatDto[];
}
export interface ICat {
  id: number;
  name: string;
  weight?: number;
  bday?: Date;
  isCastrate?: boolean;
}
export interface CatDto extends ICat {
  _links: LinksInner;
}
export interface LinksInner {
  self: Link;
  cat: Link;
}
export interface Links {
  self: Link;
  profile: Link;
  search: Link;
}
export interface Link {
    href: string;
    templated: boolean;
 }
