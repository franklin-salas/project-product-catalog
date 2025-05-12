import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../../shopping-carts/services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  totalQuantity = 0;
  private cartService= inject(CartService);

  ngOnInit(): void {
    this.cartService.getTotalQuantity().subscribe(quantity => {
      this.totalQuantity = quantity;
    });
  }
}
