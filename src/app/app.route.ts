import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./restaurant-details/menu/menu.component";
import { RestaurantDetailsComponent } from "./restaurant-details/restaurant-details.component";
import { ReviewsComponent } from "./restaurant-details/reviews/reviews.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";

export const ROUTES: Routes = [
    {path:'', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'restaurants/:id', component: RestaurantDetailsComponent,
        children:[
            {path:'',redirectTo:'menu',pathMatch:'full'},
            {path:'menu',component: MenuComponent},
            {path:'reviews',component: ReviewsComponent},
        ]},
    {path:'restaurant', component: RestaurantsComponent}

]