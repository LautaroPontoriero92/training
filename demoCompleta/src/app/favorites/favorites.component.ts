import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { DataStorageService } from '../shared/data-storage.service';
import { FavoritesService } from './favorites.service';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent implements OnInit {
    isLoading: boolean = false;
    favoritesRecipes: Recipe[] = [];

    constructor(private favoritesService: FavoritesService, private dataStorageService: DataStorageService) { }

    ngOnInit(): void {
        this.isLoading = true;
        this.favoritesService.getMyFavorites().subscribe(recipes => {
            this.isLoading = false;
            this.favoritesRecipes = recipes.filter(r => r.isFavorite);
        })

    }

}
