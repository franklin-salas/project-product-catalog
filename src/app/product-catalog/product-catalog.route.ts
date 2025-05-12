import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./ui/product-list/product-list.component')
    .then(m => m.ProductListComponent)
  }
] as Routes;