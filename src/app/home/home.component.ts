import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../services/promotion.service';
import { Promotion } from '../shared/promotion';
import { DishService } from '../services/dish.service';
import { LeaderService } from '../services/leader.service';
import { Dish } from '../shared/dish';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredDish: Dish; 
  featuredPromotion: Promotion;
  featuredLeader: Leader; 

  constructor( private dishService: DishService,
               private promotionService: PromotionService, 
               private leaderService: LeaderService ) {
    
   }

  ngOnInit() {
    this.featuredDish = this.dishService.getFeatureDish();
    this.featuredPromotion = this.promotionService.getFeaturePromotion();
    this.featuredLeader = this.leaderService.getFeaturedLeader();

  }

}
