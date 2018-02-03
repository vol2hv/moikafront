import {Component, OnInit} from '@angular/core';

import {MenubarModule, PanelMenuModule, MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  items: MenuItem[];
  constructor() {
    // this.items = [{label: 'Пункт1'}, {label: 'Пункт2'}];
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
          {label: 'Коты', icon: 'fa-download', routerLink: ['/cats'], title: 'Динамическая таблица котов'},
          {label: 'Домашняя ', icon: 'fa-download', routerLink: ['/']}
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
  ngOnInit() {
  }
}

