import { Component, OnInit } from '@angular/core';
import { ODataEntitySetResource, ODataSettings, ODataClient } from 'angular-odata';
import { Product } from '../northwind/NorthwindModel/product.entity';
import { ProductService } from '../northwind/NorthwindModel/product.service';

@Component({
    selector: 'products',
    template: `<div class="row">
    <!--<ng-container *ngFor="let p of productList; let i = index">-->
        <div class="col">
            <products>{{product.ProductName}}</products>
        </div>
    <!--</ng-container>-->
</div>`,
  })
  export class ProductComponent implements OnInit {
    product: Product;
    cols: any[];

    total: number;
    size: number;

    resource: ODataEntitySetResource<Product>;
    loading: boolean;

    constructor(
      private settings: ODataSettings,
      private odata: ODataClient,
      private products: ProductService
    ) {
      this.resource = this.products.entities();
      console.log(this.resource.toJSON());
      console.log(this.odata.fromJSON(this.resource.toJSON()));
    }

    ngOnInit() {
      let meta = this.settings.metaForType<Product>(this.resource.type());
      console.log(meta.parser.toJsonSchema());
      this.cols = meta.fields()
        .filter(f => !f.navigation)
        .map(f => ({ field: f.name, header: f.name, sort: (f.type === 'string' && !f.collection) }));
      this.loading = true;
    }

    fetch() {
      this.loading = true;
    }
}
