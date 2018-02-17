// определение маршрутов
import {Routes} from '@angular/router';
import {CatTableComponent} from './probe/cat-table/cat-table.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {ButtonDemoComponent} from './probe/button-demo/button-demo.component';
import {CatTableRestComponent} from './probe/cat-table-rest/cat-table-rest.component';

export const appRoutes: Routes =[
  { path: '', component: ButtonDemoComponent},
  { path: 'cats', component: CatTableComponent},
  { path: 'cats_rest', component: CatTableRestComponent},
  {path: 'qq', redirectTo: '', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
];
export class AppRoutingTable{}
