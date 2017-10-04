import {Component, OnInit} from '@angular/core';

import {PanelMenuModule, MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  items: MenuItem[];

  constructor() {
  }

  ngOnInit() {
    this.items = [ // все меню
      {// Клиентам
        label: 'Клиентам',
        items: [{
          label: 'Пункт1',
          icon: 'fa-plus',
          items: [
            {label: 'подпункт1-1'},
            {label: 'подпункт1-1'},
          ]
        },
          {label: 'Пункт2'},
          {label: 'Пункт3'}
        ]
      }, // клиентам
      {
        label: 'Менеджерам',
        icon: 'fa-edit',
        items: []
      },
      {label: 'Владельцам'},
      {label: 'Администраторам'},
      {
        label: 'Разработка',
        items: [
          {label: 'Страница Любарева'},
          // {label: 'Страница Мадорина',routerLink: ['/dev-madv']},
          {label: 'Страница Скворцова'}
        ]
      }
    ];
  }
}

