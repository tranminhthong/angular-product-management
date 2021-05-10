import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductServiceService} from '../../service/product-service.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  productList: Product[] = [];
  currentIndex = -1;

  constructor(private productService: ProductServiceService) {
  }

  ngOnInit() {
    this.showList();
  }

  showList() {
    this.productList = this.productService.getAllProduct();
  }

  delete(index: number) {
    this.productService.deleteProduct(index);
  }
}
