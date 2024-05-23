import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { Routes,RouterModule } from '@angular/router';
import { Lab1Component } from './component/Lab1/Lab1.component';
import { Lab2Component } from './component/Lab2/Lab2.component';
import { FormsModule } from '@angular/forms';
import { Lab3Component } from './component/Lab3/Lab3.component';
import { StarComponent } from './component/star/star.component';
import { HomeComponent } from './component/home/home.component';
import { Lab4Component } from './component/Lab4/Lab4.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { LoginComponent } from './component/login/login.component';
 const routes: Routes = [
 {path: 'lab1', component: Lab1Component},
 {path: 'lab2', component: Lab2Component},
 {path: 'lab3', component: Lab3Component},
 {path: 'lab4', component: Lab4Component},
 {path: "star", component: StarComponent},
 {path: "login", component: LoginComponent},
 {path: "home" , component: HomeComponent},
 {path: "product/:id", component: ProductDetailComponent},
 {path: "**", redirectTo: '/login', pathMatch: "full"}
 ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Lab1Component,
  Lab2Component,
Lab3Component,
StarComponent,
HomeComponent,
Lab4Component,
ProductDetailComponent,
LoginComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
FormsModule


   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
