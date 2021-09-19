import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { Restaurant } from "./restaurant/restaurant.model";
import { MEAT_API } from "app/app.api";
import { errorHandler } from "@angular/platform-browser/src/browser";
import { ErrorHandle } from "app/app.error.handle";

@Injectable()
export class RestauranteService{
    constructor(private http: Http)
    {}

   
 restaurants():Observable<Restaurant[]>{
   
    return this.http.get(`${MEAT_API}/restaurants`)
    .map(Response => Response.json())
    .catch(ErrorHandle.handleError)
    
     
 }   

 restaurantById(id:string): Observable<Restaurant>{
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
    .map(Response => Response.json())
    .catch(ErrorHandle.handleError)
 }

 reviewsOfRestaurant(id: string):Observable<any>{
   return this.http.get(`${MEAT_API}/restaurant/${id}/reviews`)
   .map(response => response.json())
   .catch(ErrorHandle.handleError)
   }

}
