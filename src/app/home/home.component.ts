import {Component, OnInit } from '@angular/core';
import { ThingService } from "../thing/thing.service";
import { CategoryService } from "../category/category.service";
import { Category } from "../category/category";
import { Thing } from "../thing/thing";

@Component({
  selector: 'tfe-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ThingService, CategoryService]
})

export class HomeComponent implements OnInit {
  categories: Category[] = [];
  things: Thing[] = [];
  private errorMessage: string = '';

  constructor(
      private thingService: ThingService,
      private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.getCategories();
    this.getThings();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
        categories  => this.categories = categories,
        error =>  this.errorMessage = <string> error
    );
  }

  getThings() {
    this.thingService.getThings().subscribe(
        things  => {
          console.log(things);
          this.things = things
        },
        error =>  {
          console.log(error);
          this.errorMessage = <string> error
        }
    );
  }

}
