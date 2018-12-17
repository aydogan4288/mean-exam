import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  place: any;
  newreview = {
    "name" : "",
    "rating" : 3,
    "comment" : ""
  }
  errors = {};

  constructor(private _ftservice: RestaurantService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.getPlace(params['id']);
    })
  }

  getPlace(id){
    let observable = this._ftservice.getOne(id);
    observable.subscribe( data => {
      this.place = data['restaurant']
    })
  }

  newRating(id){
    let observable = this._ftservice.addReview(id, this.newreview);
    observable.subscribe( data => {
      if (data['status']== 'not ok'){
        this.errors = data['errors']['errors'];
      }else{
      this.getPlace(id);
      this.newreview = {
        "name" : "",
        "rating" : 3,
        "comment" : ""
      }
    });
  }

  cancel(){
    this._router.navigate(['/']);
  }
}
