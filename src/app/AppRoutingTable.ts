// определение маршрутов
import {Routes} from '@angular/router';
import {CatTableComponent} from './probe/cat-table/cat-table.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {ButtonDemoComponent} from './probe/button-demo/button-demo.component';

export const appRoutes: Routes =[
  { path: '', component: ButtonDemoComponent},
  { path: 'cats', component: CatTableComponent},
  { path: '**', component: NotFoundComponent }
];
export class AppRoutingTable{}
