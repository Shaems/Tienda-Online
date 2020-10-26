import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';
import { CarritoListComponent } from './components/carrito-list/carrito-list.component';
 
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    
  },
  //Agregar a todas las pag canActivate : [AuthGuard]
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    children: [
      {
        path:"",
        loadChildren: () => import('./pages/products/products.module').then( m => m.ProductsPageModule),
        canActivate : [AuthGuard]
      },
      {
        path: ":productId",
        loadChildren: () => import('./pages/products/product-detail/product-detail.module').then( m => m.ProductDetailPageModule),
        
      }
    ]
  },
  {
    path: 'new-product',
    loadChildren: () => import('./pages/products/product-add/product-add.module').then(m =>m.ProductAddPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate : [NologinGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./pages/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'profile',
    children: [
      {
        path:"",
        loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
        canActivate : [AuthGuard]
      },
      {
        path: "products",
        loadChildren: () => import('./pages/profile/products/products.module').then( m => m.ProductsPageModule),
        canActivate : [AuthGuard]
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
