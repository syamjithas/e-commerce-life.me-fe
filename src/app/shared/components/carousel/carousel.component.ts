import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for product 1',
      price: 100
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for product 2',
      price: 200
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for product 3',
      price: 300
    }
  ];
  responsiveOptions = {}
}
