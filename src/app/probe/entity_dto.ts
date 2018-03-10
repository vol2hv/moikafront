
export interface ArrayEntityDto<Entity> {
  _embedded: [string, Array<Entity>];
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
