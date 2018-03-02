import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Cat, CatListDto} from './cats_dto';
import {ArrayEntityDto} from './entity_dto';
import {OperatorFunction} from 'rxjs/src/interfaces';


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
  // getFullResponse<Entity>(url: string): Observable<HttpResponse<Entity>> {
  //   return this.httpClient.get<Entity>(url , { observe: 'response' });
  // }
  getFullResponse<Entity>(url: string) {
    let i: number;
    i = 7;
    // op1: OperatorFunction<HttpResponse<Entity>, Entity>): Observable<Entity>;
    return this.httpClient
      .get<Entity> (url , { observe: 'response'})
      .pipe();
  }
}
