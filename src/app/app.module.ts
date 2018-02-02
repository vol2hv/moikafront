import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
// Берем все из PrimeNG
import {ButtonModule, PanelMenuModule, MenubarModule} from 'primeng/primeng';

// Наши сервисы
import { CityDtoService } from './probe/city-dto.service';
import {HttpClientService} from './probe/http-client.service';
// Наши компоненты
import { AppComponent } from './app.component';
import { ButtonDemoComponent } from './probe/button-demo/button-demo.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { CatTableComponent } from './probe/cat-table/cat-table.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {appRoutes} from './AppRoutingTable';

@NgModule({
  declarations: [
    AppComponent,
    ButtonDemoComponent,
    MainMenuComponent,
    CatTableComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    PanelMenuModule,
    MenubarModule
  ],
  providers: [CityDtoService, HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
