import { Injectable } from '@angular/core';
import { ODataEntityService } from 'angular-odata';
import { Product } from './product.entity';


@Injectable()
export class ProductService extends ODataEntityService<Product> {
    static path = 'Products';
    static type = 'NorthwindModel.Product';

  }