import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpClientService {
  results: string[];
  constructor(private http: HttpClient) { }
  sample1 (): void {
    console.log('Мы в Sample!!');
    // Make the HTTP request:
    this.http.get('/api/items.json')
      .subscribe(data => {
        console.log(data);
        this.results = data['results'];
        console.log(this.results);
      });
    console.log(this.results);
  }
  rest() {
    console.log('Мы в rest!!');
    this.http.get('http://localhost:8080/api/cities/')
      .subscribe(data => {
        console.log(data);
        console.log(data['_embedded']['cities'][0]['_links']['self']['href']);
      });
  }
}
