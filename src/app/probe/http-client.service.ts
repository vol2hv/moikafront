import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ArrayEntityDto} from './entity_dto';
import {OperatorFunction, UnaryFunction} from 'rxjs/src/interfaces';
import { map, filter, scan } from 'rxjs/operators';
import 'rxjs/add/operator/map';

function getEntityName(url: string) {
  const items = url.split('/');
  return items[items.length - 1];
}

@Injectable()
export class HttpClientService {
  constructor(private httpClient: HttpClient) {
  }

  get<Entity>(url: string): Observable<Entity> {
    return this.httpClient.get<Entity>(url);
  }

  getAll<Entity>(url: string): Observable<Array<Entity>> {
    const entityName = getEntityName(url);
    return this.httpClient.get<ArrayEntityDto<Entity>>(url)
      .map((dto: ArrayEntityDto<Entity>) => dto._embedded[entityName]);
  }
}

