import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-top-categories',
  standalone: true,
  imports: [CommonModule,
    RouterModule],
  templateUrl: './top-categories.component.html',
  styleUrl: './top-categories.component.css'
})
export class TopCategoriesComponent {
  categories = [
    {
      id: 1,
      name: 'Category 1',
      description: 'Description for category 1'
    },
    {
      id: 2,
      name: 'Category 2',
      description: 'Description for category 2'
    },
    {
      id: 3,
      name: 'Category 3',
      description: 'Description for category 3'
    }
  ];
}
