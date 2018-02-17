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

  constructor () { }

  count() {
    this.clicks++;
  }
}
