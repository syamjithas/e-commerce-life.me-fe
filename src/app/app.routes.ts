import { Routes } from '@angular/router';
import { LoginComponent } from './pages/user/login/login.component';
import { ListingComponent } from './pages/product/listing/listing.component';
import { FullContentComponent } from './shared/components/layouts/full-content/full-content.component';
export const routes: Routes = [
    { path: '', redirectTo: 'product/listing', pathMatch: 'full' },
    {
        path: 'product',
        component: FullContentComponent,
        children: [
            { path: 'listing', component: ListingComponent }
        ]
    },
    { path: 'auth/login', component: LoginComponent },
];
