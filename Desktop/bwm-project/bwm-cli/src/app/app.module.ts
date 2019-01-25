import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from'@angular/common';
//Routes
import {Routes,RouterModule}from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent}from './common/header/header.component';
import { RentalComponent } from './rental/rental.component';
import { TempComponent } from './temp/temp.component';
import{RentalModule}from'./rental/rental.module';
import { componentFactoryName } from '@angular/compiler';


const routes:Routes=[
  {path:'',redirectTo:'/rentals',pathMatch:'full'},
  {path:'temp',component:TempComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TempComponent,
  ],
  imports: [
    BrowserModule,
   // AppRoutingModule
     RouterModule.forRoot(routes),
     RentalModule,
     CommonModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
