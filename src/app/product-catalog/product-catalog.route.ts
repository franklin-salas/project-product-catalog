import { Routes } from '@angular/router';

export default [
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full'
  },
  {
    path: 'product',
    loadComponent: () => import('./ui/product-list/product-list.component')
    .then(m => m.ProductListComponent)
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./ui/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
  }
] as Routes;