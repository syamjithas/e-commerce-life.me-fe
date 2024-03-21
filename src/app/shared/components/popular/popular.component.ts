import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent {
  products: any[] = [
    { name: 'Product 1', price: 10.99, image: 'image1.jpg', discount: 0 },
    { name: 'Product 2', price: 19.99, image: 'image2.jpg', discount: 0 },
    { name: 'Product 3', price: 5.99, image: 'image3.jpg', discount: 0 },
    // Add more products here
  ];
}
