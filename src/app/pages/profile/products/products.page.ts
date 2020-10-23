import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/providers/products-service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products = [];
  productsService: any;

  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((snap) => {
      // Vacio la lista para empezar de 0
      this.products = [];
      // Por cada elemento armo el product para agregar a la lista
      snap.forEach((productData: any) => {
        let pD = productData.payload.doc
        this.products.push({
          id: pD.id,
          title: pD.data().title,
          price: pD.data().price,
          imageURL: pD.data().imageURL,
        });
      })
    });
  }

  addNewProduct() {
    this.router.navigate(['/products/product-add']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

}

