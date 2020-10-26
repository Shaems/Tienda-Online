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

  sliderConfig = {
    spaceBetween: 10,
    centeredSlide: true,
    slidesPerView: 1.9
  }

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
// this.products tendra el valor que me traen del servicio

  ionViewWillEnter () {
    this.ngOnInit();
  }
  // Vuelve a pintar el inicio

  addNewProduct() {
    this.router.navigate(['/new-product']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
  addNewPedido() {
    this.router.navigate(['/pedido']);
  }
  GoToCarrito() {
    this.router.navigate(['/carrito']);
  }

}
