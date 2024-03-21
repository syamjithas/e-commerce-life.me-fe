import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatButton],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
