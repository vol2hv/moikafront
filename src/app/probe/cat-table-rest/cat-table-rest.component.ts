/*
* Отработка взаимодествия с Rest сервером
* Графический CRUD
*/
import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../http-client.service';
import {Cat} from '../entity_dto';


@Component({
  selector: 'app-cat-table-rest',
  templateUrl: './cat-table-rest.component.html',
  styleUrls: ['./cat-table-rest.component.css']
})

export class CatTableRestComponent implements OnInit {

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
      });
    this.httpClientService.getAll<Cat>('http://moika:8080/api/cats/')
      .subscribe(data => {
        console.log(data);
      })
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
