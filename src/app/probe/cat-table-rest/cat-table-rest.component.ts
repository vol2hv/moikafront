/*
* Отработка взаимодествия с Rest сервером
* Графический CRUD
*/
import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../http-client.service';
import {Cat} from '../entity_dto';
import {forEach} from '@angular/router/src/utils/collection';
import {Observable} from 'rxjs/Observable';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-cat-table-rest',
  templateUrl: './cat-table-rest.component.html',
  styleUrls: ['./cat-table-rest.component.css']
})

export class CatTableRestComponent implements OnInit {
  cat: Cat;
  constructor(private httpClientService: HttpClientService) {
  }

  ngOnInit() {
    this.httpClientService.get<Cat>('http://moika:8080/api/cats/121')
      .subscribe(data => {
        console.log(data);
        console.log(typeof(data.bday));
        console.log(data._links['self']);
        // console.log(data._links.self);   ошибка
        console.log(data._links['self'].href);
        console.log(data._links['self']['href']);
        this.cat = data;
        console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq');
        console.log(this.cat);
      });
    this.httpClientService.getAll<Cat>('http://moika:8080/api/cats/')
      .subscribe(data => {
        console.log(data);
      });
    this.httpClientService.getFullResponse<Cat>('http://moika:8080/api/cats/123')
      .subscribe(data => {
        console.log(data);
        console.log(data.body);
      });
    // console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq');
    // console.log(this.cat);
    // Object.keys(this.cat).forEach(key => console.log(key, this[key], typeof (this[key])));
    // this.httpClientService.getAll('http://moika:8080/api/cats')
    //   .subscribe(data => {console.log(data);
    //   console.log( data._embedded.cats[13]._links.self);
    //   console.log(typeof (data._embedded.cats[13].bday));
    //   console.log(typeof (new Cat().bday));
    //   const d: Date = new Date(2018, 2,  19);
    //   console.log(d);
    //   const d1: Date = new Date('2018-01-30');
    //   console.log(d1);
    //   })
  }
}
