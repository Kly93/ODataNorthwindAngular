import { NgModule } from '@angular/core';
import { ProductService } from './NorthwindModel/product.service';

@NgModule({
    providers: [
      ProductService
    ]
  })
  export class NorthwindModule {}