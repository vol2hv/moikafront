
export class ArrayEntityDto<Entity> {
  _embedded: [string, Array<Entity>];
  _links: Links;
}

export class Links {
  self: Link;
  profile: Link;
  search: Link;
}
export class LinksInner {
  _links: [string, Link];
}

export class Link {
    href: string;
    templated?: boolean;
 }
