import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  private activatedRoute = inject(ActivatedRoute);

  constructor(){
    this.activatedRoute.params.subscribe((params)=> {
      console.log(params);
    })
  }
}
