import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';
import { SearchComponent } from './search/search.component';
import { ViewComponent } from './view/view.component';
import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './nav/nav.component'
import { RouterModule, Routes } from '@angular/router';
const myRoter:Routes=[
  {
    path:"",
    component:AddComponent
  },
  {
    path:"view",
    component:ViewComponent
  },
  {
    path:"search",
    component:SearchComponent
  },
  {
    path:"delete",
    component:DeleteComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    DeleteComponent,
    SearchComponent,
    ViewComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
