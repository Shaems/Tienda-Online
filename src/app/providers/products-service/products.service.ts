import { getLocalePluralCase } from '@angular/common';
import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from 'src/app/models/product/product.model';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
    {
      id:'1',
      title:'Milanesa Completa con Fritas',
      imageURL: 'https://www.hola.com/imagenes/viajes/20200325164049/torre-eiffel-paris-maravillas-del-mundo-desde-mi-pantalla/0-803-221/maravillas-desde-mi-pantalla-torre-eiffel-m.jpg',
      detail: 'milanesa de ternera con',
      price: 250,
      comments: ['Awesome place', 'wonderful experience']
    },

  ]


  constructor(
    private db: AngularFirestore
  ) {
    
   }

  getProducts() {
 //   return [...this.products]
    return this.db.collection('products').snapshotChanges();
  }
  //retorna una copia de los lugares

  getProduct(productId: string) {
    return this.db.collection('products').doc(productId).get();
  }
// busqueda de Id. recorre. Retorna dentro de un objeto
  addProduct(title: string, imageURL: string, detail: string, price: number) {
    this.db.collection('products').add({
      title,
      imageURL,
      detail,
      price,
    })
    this.products.push({
      title,
      imageURL,
      detail,
      price,
      comments: [],
      id: this.products.length + 1 + ""
    })
  }

// Recibe los datos del lugar
  deleteProduct(productId: string) {
    this.products = this.products.filter(product=> {
      return product.id !== productId
    })
  }

//si cada lugar que estas recoriendo coincide con el id que me mandan no agregarlo a la lista. Este nuevo valor no guardarlo

  editProduct(title: string, imageURL: string, detail: string, price: number) {
    const uid = this.products.length + 1 + "";
    this.db.collection('products').doc(uid).update({
      title,
      imageURL,
      detail,
      price,
      uid 
    })
    
  }

}
