import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { DataStorageService } from '../../../shared/data-storage.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }
  isFavorite(recipe: Recipe) {

    recipe.isFavorite = !recipe.isFavorite;

    this.dataStorageService.storeRecipes();

  }
}
