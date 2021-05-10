import {Injectable} from '@angular/core';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  listCategory: Category[] = [
    {
      cate_id: 1,
      cate_name: 'SmartPhone'
    },
    {
      cate_id: 2,
      cate_name: 'Computer'
    },
    {
      cate_id: 3,
      cate_name: 'Television'
    }
  ];

  constructor() {
  }

  getAllCategory() {
    return this.listCategory;
  }
}
