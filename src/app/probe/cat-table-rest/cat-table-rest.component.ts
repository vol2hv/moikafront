import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../http-client.service';

@Component({
  selector: 'app-cat-table-rest',
  templateUrl: './cat-table-rest.component.html',
  styleUrls: ['./cat-table-rest.component.css']
})

export class CatTableRestComponent implements OnInit {

  constructor(private httpClientService: HttpClientService) {}

  ngOnInit() {
    this.httpClientService.getAll('http://moika:8080/api/cats')
      .subscribe(data =>
      {console.log(data);
      console.log( data._embedded.cats[13]._links.self);
      })
  }

}
