import { Component, OnInit } from '@angular/core';
import { CategoriesService } from "./categories.service";
import { Category } from "./category";

@Component({
  selector: 'admin-tfe-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [ CategoriesService ]
})
export class CategoriesComponent implements OnInit {

  private categories: Category[];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe(
        (response) => this.onSuccessGetCategories(response),
        (error) => this.onHttpError(error)
    );
  }

  onHttpError(error) {
    console.log('onHttpError: ' + error);
  }

  onSuccessGetCategories(response) {
    console.log('onSuccessGetCategories: ' + response);
  }

}
