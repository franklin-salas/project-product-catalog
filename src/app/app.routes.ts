import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./product-catalog/product-catalog.route'),
  },
  { path: 'cart', loadChildren: () => import('./shopping-carts/shopping-carts.route') },
  {
    path: '**',
    redirectTo: '',
  },
];