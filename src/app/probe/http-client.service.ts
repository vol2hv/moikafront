import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Cat, CatListDto} from './cats_dto';
import {ArrayEntityDto} from './entity_dto';


@Injectable()
export class HttpClientService {
  constructor(private httpClient: HttpClient) { }

  get<Entity> (url: string): Observable<Entity> {
    return this.httpClient.get<Entity>(url);
    // let aa: EntityDto<Cat>;
    // aa.entity = data;
    //   return this.httpClient.get<EntityDto<Cat>>(url);
  }
  getAll<Entity> (url: string): Observable<ArrayEntityDto<Entity>> {
    return this.httpClient.get<ArrayEntityDto<Entity>>(url);

  }
}
