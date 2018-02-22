/*
* Отработка взаимодествия с Rest сервером
* Графический CRUD
*/
import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../http-client.service';
import {Cat} from '../cat';
import {EntityDto} from '../entity_dto';

@Component({
  selector: 'app-cat-table-rest',
  templateUrl: './cat-table-rest.component.html',
  styleUrls: ['./cat-table-rest.component.css']
})

export class CatTableRestComponent implements OnInit {

  constructor(private httpClientService: HttpClientService) {}

  ngOnInit() {
    this.httpClientService.get('http://moika:8080/api/cats/122')
      .subscribe(data => {console.log(data);
      console.log(data.self);
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
