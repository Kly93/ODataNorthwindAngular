import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ODataModule } from 'angular-odata';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product.component';
import { NorthwindConfig } from './northwind/northwind.config';
import { NorthwindModule } from './northwind/northwind.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    ODataModule.forRoot(Object.assign(NorthwindConfig, {baseUrl: 'https://services.odata.org/V4/Northwind/Northwind.svc/?$format=json' })),
    BrowserModule,
    AppRoutingModule,
    NorthwindModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
