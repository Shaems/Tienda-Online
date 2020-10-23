import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/providers/products-service/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.page.html',
  styleUrls: ['./product-add.page.scss'],
})
export class ProductAddPage implements OnInit {

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit() {
  }
  saveNewProduct(title: HTMLInputElement, imageURL: HTMLInputElement, detail: HTMLInputElement, price: HTMLInputElement) {
    this.productsService.addProduct(title.value, imageURL.value, detail.value, Number(price.value))
    this.router.navigate(['/products'])
  }

}
