import { Component, OnInit } from '@angular/core';
import { ODataEntitySetResource, ODataSettings, ODataClient, ODataServiceFactory } from 'angular-odata';
import { Product } from '../northwind/NorthwindModel/product.entity';
import { ProductService } from '../northwind/NorthwindModel/product.service';

@Component({
    selector: 'products',
    templateUrl: './products.component.html',
  })
  export class ProductComponent implements OnInit {
    rows: Product[];
    cols: any[];

    total: number;
    size: number;

    resource: ODataEntitySetResource<Product>;
    loading: boolean;

    constructor(
        private settings: ODataSettings,
        private factory: ODataServiceFactory,
        private odata: ODataClient,
        private pService: ProductService
      ) {
        this.resource = this.pService.entities();
        this.resource.get({withCount: true}).subscribe(([people]) => {
          this.rows = people;
        });
      }

      ngOnInit() {
        const meta = this.settings.metaForType<Product>(this.resource.type());
        console.log(meta.parser.toJsonSchema());
        this.loading = true;
      }

      fetch() {
        this.loading = true;
        this.resource.get({withCount: true}).subscribe(([people, odata]) => {
          this.rows = people;
          console.log('Here are the ps:', this.rows);
        });
      }

      loadPeopleLazy(event) {
        this.fetch();
      }
}
