import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestauranteService } from 'app/restaurants/restaurant.service';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {

  restaurant:Restaurant
  constructor(private restauranteService:RestauranteService,
      private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.restauranteService.restaurantById(this.activateRoute.snapshot.params['id'])
    .subscribe(restaurant => this.restaurant = restaurant)
  }

}
