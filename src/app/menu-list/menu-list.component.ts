import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestaurentService } from '../restaurent.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  showCartItems: any;

  constructor(private restService: RestaurentService, private route: ActivatedRoute,
    public formBuilder: FormBuilder) { }
  hotelData: any;
  foodData: any;
  cartItems: any = [];

  addPlus(id: any) {
    let index = this.foodData.indexOf(id);
    this.foodData[index].quantity++;
    this.getBillAmount();


  }
  addMinus(id: any) {
    let index = this.foodData.indexOf(id);
    this.foodData[index].quantity--;
    this.getBillAmount();

  }


  showPM(id: any) {
    let index = this.foodData.indexOf(id);
    this.foodData[index].showAdd = false;
    this.foodData[index].showPM = true;
    if (this.foodData[index].quantity === 0) {
      this.foodData[index].showAdd = true;
      this.foodData[index].showPM = false;
    }
    this.addToCart(id);
    this.getBillAmount();
  }


  addToCart(food: any) {
    this.cartItems.push(food);
  }

  billAmount: any;
  getBillAmount() {
    let bill = 0;
    this.billAmount = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      bill = this.cartItems[i].cost * this.cartItems[i].quantity;
      this.billAmount = this.billAmount + bill;
    }
  }

  checkOutForm = this.formBuilder.group({
    name: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern('[0-9]{10,15}')]]
  })

  get checkForm() {
    return this.checkOutForm.controls;
  }


  formDetails: any;
  checkOutFormSubmit() {
    this.formDetails = this.checkOutForm.value;
    return this.checkOutForm.reset();
  }

  showPlaceOrder: any = false;
  checkOut() {
    this.showPlaceOrder = true;
  }

  ngOnInit(): void {

    this.route.params.subscribe(data => {
      let id = data.id;
      let hotelArray = this.restService.getRestaurentDetails();
      this.hotelData = hotelArray[id];
      this.foodData = hotelArray[id].foodItems;
    });
    this.getBillAmount();

  }

}
// comments for testing git
