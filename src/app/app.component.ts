import { Component } from '@angular/core';

// import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-catalog/ui/product-list/product-list.component';
import { NavbarComponent } from './shared/ui/navbar/navbar.component';
//RouterOutlet
@Component({
  selector: 'app-root',
  imports: [ProductListComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product-catalog';
}
