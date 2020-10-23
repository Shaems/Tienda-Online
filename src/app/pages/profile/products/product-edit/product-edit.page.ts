import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProductsService } from 'src/app/providers/products-service/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.page.html',
  styleUrls: ['./product-edit.page.scss'],
})
export class ProductEditPage implements OnInit {

  product: any = {};


  constructor(private activatedRoute: ActivatedRoute,
     private productsService: ProductsService,
      private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paranMap => {
      //redirect
      const recipedId = paranMap.get('productId')
      this.productsService.getProduct(recipedId).subscribe((snap) => {  
          let p = snap.data();
          console.log(p)
          this.product = {
            title: p.title,
            imageURL: p.imageURL,
            detail: p.detail,
            price: p.price,
            id: p.uid,
            comments: []
          };
        })
      });

  }
  async deleteProduct() {

    const alertElement = await this.alertCtrl.create({
      header: 'Are your sure, you want to delete it?',
      message: 'Be careful',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () =>{
            this.productsService.deleteProduct(this.product.id)
            this.router.navigate(['/products'])
          }

        }
      ]
    });
//Que mostrar dentro de la alerta
    await alertElement.present();
   
  }
// llama al servicio deletePlace, y elimina de ese place la id
//Le decimos a que ruta queremos que nos redirija


}
