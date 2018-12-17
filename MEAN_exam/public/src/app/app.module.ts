import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';

import {RestaurantService} from './restaurant.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SingleComponent,
    NewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
