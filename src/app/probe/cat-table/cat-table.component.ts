/*
вывод таблицы котов
этот компонент нужен только изучения вывода таблицы
нужда в нем отпадет когда будет отработан CRUD для таблиц
*/

import { Component, OnInit } from '@angular/core';
import {Cat} from '../cat';
import {CatService} from '../cat.service';

@Component({
  selector: 'app-cat-table',
  templateUrl: './cat-table.component.html',
  styleUrls: ['./cat-table.component.css']
})
export class CatTableComponent implements OnInit {
  cats: Cat[] = Array(0);
  cols: any[];
  constructor( private cs: CatService) {}


  ngOnInit() {
    this.cs.get('/api/catslist.json')
      .subscribe(data => {console.log(data); }
  )
    for (let i = 0 ; i < 30; i++ ) {
      this.cats.push(new Cat());
      this.cats[i].id = i + 1 ;
      this.cats[i].name = 'name' + i ;
      this.cats[i].weight = 3 + 0.1 * i ;
      this.cats[i].bday = (new  Date(2016, 0, i + 1 )).toLocaleDateString();
      this.cats[i].isCastrate = false;
    }
    console.log( this.cats );
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'name', header: 'name' },
      { field: 'weight', header: 'weight' },
      { field: 'bday', header: 'bday' },
      { field: 'isCastrate', header: 'isCastrate' }
    ];

  }

}
