import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CatListDto} from './cats_dto';

@Injectable()
export class HttpClientService {
  constructor(private httpClient: HttpClient) { }
  getAll(url: string): Observable<CatListDto> {
    return this.httpClient.get<CatListDto> (url);
  }
}
