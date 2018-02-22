export interface CatListDtoMap {
  _embedded: CatDto[] ;
  _links: Links;
}
export interface CatListDtoWithoutLinks {
  cats: CatDto[];
}
export interface Cat {
  id: number;
  name: string;
  weight?: number;
  bday?: Date;
  isCastrate?: boolean;
}
export interface CatDto extends Cat {
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
