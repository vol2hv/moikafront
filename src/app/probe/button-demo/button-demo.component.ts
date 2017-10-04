import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-demo',
  templateUrl: './button-demo.component.html',
  styleUrls: ['./button-demo.component.css']
})
export class ButtonDemoComponent implements OnInit {
  clicks: number;

  count() {
    this.clicks++;
  }

  constructor() { }

  ngOnInit() {
    this.clicks = 0;
  }

}
