import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarritoListComponent } from 'src/app/components/carrito-list/carrito-list.component';

import { CarritoPage } from './carrito.page';

const routes: Routes = [
  {
    path: '',
    component: CarritoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarritoPageRoutingModule {}
