import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth-service/auth.service';
import { ProductsService } from '../providers/products-service/products.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  products = [];
  productsService: any;


  constructor(public authservise: AuthService, private productService: ProductsService, private router: Router) {}

  OnLogOut(){
    this.authservise.logout();
  }


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
}