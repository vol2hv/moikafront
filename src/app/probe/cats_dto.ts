export interface CatListDto {
  _embedded: CatListDtoWithoutLinks ;
  _links: Links;
}
export interface CatListDtoWithoutLinks {
  cats: CatDto[];
}
export interface Cat {
  id: number;
  name: string;
  weight?: number;
  bday?: string;
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
