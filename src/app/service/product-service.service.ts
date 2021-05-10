import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {environment} from '../../environments/environment';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  productList: Product[] = [
    {
      id: 1,
      name: 'IPhone 12',
      price: 2400000,
      description: 'New',
      category: {
        cate_id: 1,
        cate_name: 'SmartPhone'
      }
    },
    {
      id: 2,
      name: 'IPhone 11',
      price: 1560000,
      description: 'Like new',
      category: {
        cate_id: 1,
        cate_name: 'SmartPhone'
      }
    },
    {
      id: 3,
      name: 'IPhone X',
      price: 968000,
      description: '97%',
      category: {
        cate_id: 1,
        cate_name: 'SmartPhone'
      }
    },
    {
      id: 4,
      name: 'IPhone 8',
      price: 7540000,
      description: '98%',
      category: {
        cate_id: 1,
        cate_name: 'SmartPhone'
      }
    },
    {
      id: 5,
      name: 'IPhone 11 Pro',
      price: 1895000,
      description: 'Like new',
      category: {
        cate_id: 1,
        cate_name: 'SmartPhone'
      }
    }
  ];

  constructor() {
  }

  getAllProduct() {
    return this.productList;
  }

  createNewProduct(product: Product) {
    this.productList.push(product);
  }

  updateProduct(index: number, product: Product) {
    this.productList[index] = product;
  }

  deleteProduct(index: number) {
    this.productList.splice(index, 1);
  }
}
