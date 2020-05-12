import { Component } from '@angular/core';
import { ODataServiceFactory, ODataClient } from 'angular-odata';
import { NorthwindService } from './northwind/NorthwindModel/northwind.service';
import { ProductService } from './northwind/NorthwindModel/product.service';
import { Product } from './northwind/NorthwindModel/product.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private odata: ODataClient,
    private factory: ODataServiceFactory,
    private api: NorthwindService,
    private product: ProductService
  ) {
      this.queries();
  
  }
    queries() {
      this.entities();
    }
    entities() {
      // Use OData Service Factory
      let productService = this.factory.create<Product>("Products");

      let products = productService.entities();
      console.log(this.odata.fromJSON(products.toJSON()));
      console.log(productService.entities());
      // Fetch set
      products.all()
        .subscribe(aports => console.log("All: ", aports));
    }
}
