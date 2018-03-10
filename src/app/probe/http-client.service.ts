import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Cat, CatListDto} from './cats_dto';
import {ArrayEntityDto} from './entity_dto';
import {OperatorFunction, UnaryFunction} from 'rxjs/src/interfaces';
import { map, filter, scan } from 'rxjs/operators';

@Injectable()
export class HttpClientService {
  constructor(private httpClient: HttpClient) {
  }

  get<Entity>(url: string): Observable<Entity> {
    return this.httpClient.get<Entity>(url);
    // let aa: EntityDto<Cat>;
    // aa.entity = data;
    //   return this.httpClient.get<EntityDto<Cat>>(url);
  }

  getAll<Entity>(url: string): Observable<ArrayEntityDto<Entity>> {
    return this.httpClient.get<ArrayEntityDto<Entity>>(url);
  }

  // getFullResponse<Entity>(url: string): Observable<HttpResponse<Entity>> {
  //   return this.httpClient.get<Entity>(url , { observe: 'response' });
  // }
  getFullResponse<Entity>(url: string) {
    return this.httpClient
      .get<Entity>(url, {observe: 'response'})
      .pipe();
  }

  get1<Entity>(url: string): Observable<Entity> {
    return this.httpClient.get<Entity>(url);
  }
}
/*
* pipe<A>(op1: OperatorFunction<T, A>): Observable<A>
* export type OperatorFunction<T, A> = UnaryFunction<Observable<T>, Observable<A>>;
* export type UnaryFunction<T, A> = (source: T) => A;
* Observable<HttpResponse<Object>>
*
* */
