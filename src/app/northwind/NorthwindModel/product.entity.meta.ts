import { MetaEntity } from 'angular-odata';

import { Product } from './product.entity';

export const ProductMetaEntity = {
    type: 'NorthwindModel.Product',
    annotations: [],
    fields: {
      ProductID: {type: 'number', key: false, ref: 'ProductID', nullable: false, 
      annotations: [{type: 'Org.OData.Core.V1.Permissions', permissions: ['Org.OData.Core.V1.Permission/Read']}]},
      ProductName: {type: 'string', nullable: true},
      UnitsInStock: {type: 'number', nullable: true}
    }
  } as MetaEntity<Product>;