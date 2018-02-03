import { Component, OnInit } from '@angular/core';
import { CityDtoService } from '../../probe/city-dto.service';
import {HttpClientService} from '../http-client.service';


@Component({
  selector: 'app-button-demo',
  templateUrl: './button-demo.component.html',
  styleUrls: ['./button-demo.component.css']
})
export class ButtonDemoComponent {
  clicks = 0;

  constructor(private citydto: CityDtoService, private client: HttpClientService) { }

  count() {
    this.clicks++;
  }
  list_city() {
    this.count();
    console.log(this.citydto.getAll());
  }
  sample1() {
    this.count();
    this.client.sample1();
  }
  restsample() {
    this.count();
    this.client.rest();
  }
}
