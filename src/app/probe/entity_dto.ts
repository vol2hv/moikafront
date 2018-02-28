export interface Cat extends LinksInner {
  id: number;
  name: string;
  weight?: number;
  bday?: Date;
  isCastrate?: boolean;
}

export interface ArrayEntityDto<Entity> {
  entities: Array<Entity>;
  _links: Links;
}

export interface Links {
  self: Link;
  profile: Link;
  search: Link;
}
export interface LinksInner {
  _links: [string, Link];
}

export interface Link {
    href: string;
    templated?: boolean;
 }
