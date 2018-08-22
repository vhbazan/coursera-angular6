import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { OverlayKeyboardDispatcher } from '@angular/cdk/overlay';
import { DISHES } from '../shared/dishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: Dish[] = DISHES;

  selectedDish: Dish; 

  constructor() { }

  ngOnInit() {
  }
  
  onSelectedDish(dish:Dish) {
    console.log("slected dish");
    this.selectedDish = dish;
  }

}
