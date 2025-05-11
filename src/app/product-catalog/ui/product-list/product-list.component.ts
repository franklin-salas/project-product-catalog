import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule,ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name: 'Pancillo Especial Hipermaxi con Queso kg',
      price: 200,
      discountPrice: 150,
      image: 'https://hipermaxi.com/tienda-api/marketfile/ImageEcommerce?hashfile=cc9db56_2d00_42c7_9ea2_5aec4e21fc98.jpg&co=5&size=400x400'
    },
    {
      id: 2,
      name: 'Empanadas Royal Hipermaxi kg',
      price: 53,
      discountPrice: 45,
      image: 'https://hipermaxi.com/tienda-api/marketfile/ImageEcommerce?hashfile=a85137f_8f6e_4e39_bc4a_3a73813ac35e.jpg&co=5&size=400x400'
    },
    {
      id: 3,
      name: 'Pan Factura Hipermaxi kg',
      price: 43.90,
      discountPrice: 40,
      image: 'https://hipermaxi.com/tienda-api/marketfile/ImageEcommerce?hashfile=104bdb7_5cec_47b7_8215_2cbdb8bf0f0d.jpg&co=5&size=400x400'
    },
    {
      id: 4,
      name: 'Pan Molde San Gabriel Multicereal 650 gr',
      price: 12.5,
      discountPrice: 12,
      image: 'https://hipermaxi.com/tienda-api/marketfile/ImageEcommerce?hashfile=9ba4b33_9bd9_49d9_ba60_e4b8a03dcf8d.jpg&co=5&size=400x400'
    }
    // puedes agregar más productos aquí
  ];

  onProductAdded(productName: string) {
    alert(`¡${productName} agregado al carrito!`);
  }
}
