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
  cats: Cat[];
  cols: any[];
  constructor(private httpClientService: HttpClientService) {
  }
  download() {
    this.httpClientService.getAll<Cat>('http://moika:8080/api/cats')
      .subscribe(data => {
        console.log(data);
        this.cats = data;
        this.cat = data[16];
        for (const item in this.cat) {
          const key = this.cat[item];
          console.log(item, key, typeof (key));
        }
      });
  }
  clear() {
    this.cats = [];
  }
  ngOnInit() {
   /* this.httpClientService.get<Cat>('http://moika:8080/api/cats/121')
      .subscribe(data => {
        console.log(data);
        console.log('Тип полученных данных:!! ' , typeof (data));
        console.log(typeof(data.bday));
        console.log(data._links['self'].href);
        this.cat = data;
      });
      */
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'name', header: 'name' },
      { field: 'weight', header: 'weight' },
      { field: 'bday', header: 'bday' },
      { field: 'isCastrate', header: 'isCastrate' }
    ];
  }
}
