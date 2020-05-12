import { NgModule } from '@angular/core';
import { ProductService } from './NorthwindModel/product.service';
import { NorthwindService } from './NorthwindModel/northwind.service';

@NgModule({
    providers: [
      NorthwindService,
      ProductService
    ]
  })
  export class NorthwindModule {}