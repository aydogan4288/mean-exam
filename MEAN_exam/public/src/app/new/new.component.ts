import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  place = {
    "name": '',
    "cuisine_type": '',
    'description': ''
  }
  errors = {};
  constructor(private _ftService: RestaurantService, private _router: Router) { }

  ngOnInit() {
  }
  create(){
    let observable = this._ftService.createPlace(this.place);
    observable.subscribe(data => {
      console.log(data);
      if (data['status']== 'not ok'){
        this.errors = data['errors']['errors'];
      }else{
        this._router.navigate(['/']);
      }
    });
  }

  cancel(){
    this._router.navigate(['/']);
  }

}
