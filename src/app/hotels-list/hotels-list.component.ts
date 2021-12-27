import { Component, OnInit } from '@angular/core';
import { RestaurentService } from '../restaurent.service';


@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit {
  hotelList:any;

  constructor(private restService:RestaurentService) { }

  

  ngOnInit(): void {

      this.hotelList = this.restService.getRestaurentDetails();

  }

}
