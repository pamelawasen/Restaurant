import { Component, OnInit } from '@angular/core';
import { RestauranteService } from './restaurant.service';
import { Restaurant } from './restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

restaurants:Restaurant[];
  constructor(private restaurantServices:RestauranteService) { }

  ngOnInit() {
    this.restaurantServices.restaurants()
    .subscribe(restaurants => this.restaurants = restaurants)
  }

}
