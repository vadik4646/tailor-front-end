import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoryDetailsComponent } from './category/category-details/category-details.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { ThingDetailsComponent } from './thing/thing-details/thing-details.component';
import { ThingListComponent } from './thing/thing-list/thing-list.component';
import { ThingComponent } from './thing/thing.component';
import { CategoryComponent } from './category/category.component';
import { NavComponent } from './nav/nav.component';
import { PricesComponent } from './prices/prices.component';
import { AlbumsComponent } from './albums/albums.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'prices', component: PricesComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryDetailsComponent,
    CategoryListComponent,
    ThingDetailsComponent,
    ThingListComponent,
    ThingComponent,
    CategoryComponent,
    NavComponent,
    PricesComponent,
    AlbumsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
