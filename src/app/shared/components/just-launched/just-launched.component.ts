import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-just-launched',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './just-launched.component.html',
  styleUrl: './just-launched.component.css'
})
export class JustLaunchedComponent {
  products: any[] = [
    { name: 'Product 1', price: 10.99, image: 'image1.jpg', discount: 0 },
    { name: 'Product 2', price: 19.99, image: 'image2.jpg', discount: 0 },
    { name: 'Product 3', price: 5.99, image: 'image3.jpg', discount: 0 },
  ];
}
