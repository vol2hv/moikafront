// определение маршрутов
import {Routes} from '@angular/router';
import {CatTableComponent} from './probe/cat-table/cat-table.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {ButtonDemoComponent} from './probe/button-demo/button-demo.component';
import {CatTableRestComponent} from './probe/cat-table-rest/cat-table-rest.component';
import {TsExampleComponent} from './probe/ts-example/ts-example.component';

export const appRoutes: Routes = [
  { path: '', component: ButtonDemoComponent},
  { path: 'cats', component: CatTableComponent},
  { path: 'cats_rest', component: CatTableRestComponent},
  { path: 'ts_example', component: TsExampleComponent},
  {path: 'qq', redirectTo: '', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
];
export class AppRoutingTable {}
