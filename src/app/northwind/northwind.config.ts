import { ODataConfig } from 'angular-odata';
import { ProductMetaEntity } from './NorthwindModel/product.entity.meta';

export const NorthwindConfig: ODataConfig  = {
    baseUrl: 'https://services.odata.org/V4/Northwind/Northwind.svc/?$format=json',
    metadataUrl: 'https://services.odata.org/V4/Northwind/Northwind.svc/$metadata',
    withCredentials: false,
    stringAsEnum: true,
    creation: new Date('2020-04-28T22:39:33.1350547-03:00'),
    version: '4.0',
    models: {
      },
    collections: {
      },
    metas: {
      'NorthwindModel.Product': ProductMetaEntity
    }
};