import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../services/promotion.service';
import { Promotion } from '../shared/promotion';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredDish: Dish; 
  featuredPromotion: Promotion;

  constructor( private dishService: DishService,
               private promotionService: PromotionService ) {
    
   }

  ngOnInit() {
    this.featuredDish = this.dishService.getFeatureDish();
    this.featuredPromotion = this.promotionService.getFeaturePromotion();

  }

}
