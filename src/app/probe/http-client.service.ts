import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CatListDto} from './cats_dto';
import {EntityDto} from './entity_dto';
import {Cat} from './cat';

@Injectable()
export class HttpClientService {
  constructor(private httpClient: HttpClient) { }

  get(url: string): Observable<EntityDto<Cat>> {
    // return this.httpClient.get<EntityDto<Cat>>(url);
      return this.httpClient.get<EntityDto<Cat>>(url);
  }
  getAll(url: string): Observable<CatListDto> {
    return this.httpClient.get<CatListDto> (url);
  }
}
