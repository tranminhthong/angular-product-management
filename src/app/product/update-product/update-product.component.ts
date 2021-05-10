import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductServiceService} from '../../service/product-service.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../model/product';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productFormUpdate: FormGroup;
  product: Product = {};
  index = -2;
  listCate: Category[];

  constructor(
    private productService: ProductServiceService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.index = +paramMap.get('id');
      const product = this.getProductByIndex(this.index);
      this.productFormUpdate = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
        category: new FormControl(product.category)
      });
    });
    this.getAllCate();
  }

  ngOnInit() {
  }

  getAllCate() {
    this.listCate = this.categoryService.getAllCategory();
  }

  getProductByIndex(index) {
    const products = this.productService.getAllProduct();
    return products[index];
  }

  updateProduct(index) {
    const productUpdate = this.productFormUpdate.value;
    this.productService.updateProduct(index, productUpdate);
  }
}
