/*
* Отработка взаимодествия с Rest сервером
* Графический CRUD
*/
import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../http-client.service';
import {forEach} from '@angular/router/src/utils/collection';
import {Observable} from 'rxjs/Observable';
import {HttpResponse} from '@angular/common/http';
import {Cat, ICat} from '../cats_dto';
import {ArrayEntityDto} from '../entity_dto';

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
    this.httpClientService.get<ICat>('http://moika:8080/api/cats/121')
      .subscribe(data => {
        console.log(data);
        console.log('Тип полученных данных:!! ' , typeof (data));
        console.log(typeof(data.bday));
        console.log(data._links['self'].href);
      });
    this.httpClientService.getAll<ICat>('http://moika:8080/api/cats')
      .subscribe(data => {
        console.log(data);
        console.log('Тип полученных данных:!! ' , typeof (data));
        console.log(data._embedded['cats'][12].bday);
        console.log(data._embedded['cats'][12]._links['self'].href);
      });
    // Object.keys(this.cat).forEach(key => console.log(key, this[key], typeof (this[key])));
  }
}
