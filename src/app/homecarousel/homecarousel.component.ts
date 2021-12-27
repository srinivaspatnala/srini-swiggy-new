import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homecarousel',
  templateUrl: './homecarousel.component.html',
  styleUrls: ['./homecarousel.component.scss']
})
export class HomecarouselComponent implements OnInit {

  constructor() { }

  carouselImages = [
    {
      image: './assets/images/one.jpg'
    },
    
    {
      image: './assets/images/swiggy.png'
    },
    {
      image: './assets/images/two.jpg'
    }
  ];

  ngOnInit(): void {
  }

}
