import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { GetGraphsComponent } from './components/get-graphs/get-graphs.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DoGraphsComponent } from './components/do-graphs/do-graphs.component';

@NgModule({
  declarations: [
    AppComponent,
    GetGraphsComponent,
    DoGraphsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
