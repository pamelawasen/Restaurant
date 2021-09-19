import { Component, OnInit,Input } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { RestauranteService } from 'app/restaurants/restaurant.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant:Restaurant
  constructor() { }

  ngOnInit() {
  }

}
