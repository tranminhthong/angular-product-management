import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductServiceService} from '../../service/product-service.service';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(''),
  });

  listCate: Category[];

  constructor(private productService: ProductServiceService,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getAllCate();
  }

  createNewProduct() {
    const newProduct = this.productForm.value;
    this.productService.createNewProduct(newProduct);
    this.productForm.reset();
  }

  getAllCate() {
    this.listCate = this.categoryService.getAllCategory();
  }
}
