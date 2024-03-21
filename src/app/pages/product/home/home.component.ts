import { Component } from '@angular/core';
import { CarouselComponent } from '../../../shared/components/carousel/carousel.component';
import { AdvertisementComponent } from '../../../shared/components/advertisement/advertisement.component';
import { JustLaunchedComponent } from '../../../shared/components/just-launched/just-launched.component';
import { ShopByBrandComponent } from '../../../shared/components/shop-by-brand/shop-by-brand.component';
import { TopCategoriesComponent } from '../../../shared/components/top-categories/top-categories.component';
import { PromotionComponent } from '../../../shared/components/promotion/promotion.component';
import { PopularComponent } from '../../../shared/components/popular/popular.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent,
    AdvertisementComponent,
    JustLaunchedComponent,
    ShopByBrandComponent,
    TopCategoriesComponent,
    PromotionComponent,
    PopularComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
