import { Routes } from '@angular/router';
import { LoginComponent } from './pages/user/login/login.component';
import { ListingComponent } from './pages/product/listing/listing.component';
import { HomeComponent } from './pages/product/home/home.component';
import { FullContentComponent } from './shared/components/layouts/full-content/full-content.component';
export const routes: Routes = [
    { path: '', redirectTo: 'product/home', pathMatch: 'full' },
    {
        path: 'product',
        component: FullContentComponent,
        children: [
            { path: 'home', component: HomeComponent }
        ]
    },
    {
        path: 'product',
        component: FullContentComponent,
        children: [
            { path: 'listing', component: ListingComponent }
        ]
    },
    { path: 'user/login', component: LoginComponent },
];
