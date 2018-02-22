export interface EntityDto<Entity> {
  entity: Entity;
  self: Link;
}

export interface IistEntityDto<Entity> {
  listEntity: EntityDto<Entity>[] ;
  _links: Links;
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
