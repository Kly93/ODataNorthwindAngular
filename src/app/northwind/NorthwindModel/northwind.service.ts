import { Injectable } from '@angular/core';
import { ODataClient, HttpOptions, ODataEntityAnnotations } from 'angular-odata';
import { Observable } from 'rxjs';
import { Product } from './product.entity';

@Injectable()
export class NorthwindService {
 
  constructor(protected client: ODataClient) { }

  
}