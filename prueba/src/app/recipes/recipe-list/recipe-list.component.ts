import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://images.rawpixel.com/image_500/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvYTAxOS1qYWt1YmstMDc5My1jcnVzdHktcGl6emEtd2l0aC1zYWxhbWktbXVzaHJvb21zLW9uaW9uLmpwZw.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://es.digitaltrends.com/wp-content/uploads/2022/02/180-alf.jpg?fit=720%2C720&p=1')
  ];

  constructor() { }

  ngOnInit() {
  }

}
