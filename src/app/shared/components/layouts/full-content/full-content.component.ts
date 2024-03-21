import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
@Component({
    selector: 'app-full-content',
    standalone: true,
    templateUrl: './full-content.component.html',
    styleUrl: './full-content.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent]
})
export class FullContentComponent {

}
