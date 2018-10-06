import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  
  dishes: Dish[] = DISHES; //automatically assign the type Dishes, equals to dishes: Dish[] = DISHES;
  selectedDish : Dish;

  constructor() { }

  ngOnInit() {
  }

  onSelected(dish: Dish){
    this.selectedDish = dish;
  }

}