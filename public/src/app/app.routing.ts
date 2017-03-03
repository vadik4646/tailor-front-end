import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PricesComponent } from "./prices/prices.component";
import { AlbumsComponent } from "./albums/albums.component";
import { ContactComponent } from "./contact/contact.component";

const APP_ROUTING: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'prices', component: PricesComponent },
    { path: 'albums', component: AlbumsComponent },
    { path: 'contact', component: ContactComponent }
];
export const appRouting = RouterModule.forRoot(APP_ROUTING);
