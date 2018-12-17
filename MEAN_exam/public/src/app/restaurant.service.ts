import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private _http: HttpClient) { }

  getPlaces(){
    return this._http.get('/restaurants');
  }
  createPlace(place){
    return this._http.post('/restaurant', place);
  }
  getOne(id){
    return this._http.get(`/restaurant/${id}`);
  }

  addReview(id, review){
    return this._http.post(`/restaurant/${id}/review`, review);
  }

  updateOne(id, place){
    return this._http.put(`/restaurant/${id}`, place);
  }

  deleteOne(id){
    return this._http.delete(`/restaurant/${id}`);
  }


}
