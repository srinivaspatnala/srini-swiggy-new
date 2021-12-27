
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { IVendor } from '../services/vendorDetails.modal';



@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {
  idSelected:any;
  vendorFormValue !: FormGroup;
  vendorModelObj: IVendor = new IVendor();
  vendorList: any;
  showAdd: boolean | any;
  showUpdate : boolean | any;
  public errormsg: any;

  constructor( private formBuilder:FormBuilder, 
    private api:ApiService, 
    private _router:Router, 
    private _activatedRoute:ActivatedRoute ) { }

  onClickAdd(){
    this.showAdd = true;
    this.showUpdate = false;
    this.vendorFormValue.reset();
  }

  postVendor(){

    this.vendorModelObj.name = this.vendorFormValue.value.name;
    this.vendorModelObj.rating = this.vendorFormValue.value.rating;
    this.vendorModelObj.description = this.vendorFormValue.value.description;
    this.vendorModelObj.type = this.vendorFormValue.value.type;

    this.api.postVendor(this.vendorModelObj)
    .subscribe( res => {
      console.log(res);
      alert('data added');
      this.vendorFormValue.reset();
      let ref = document.getElementById('close');
      ref?.click();
      this.getVendor();
      
    }, err => {
      alert('something went wrong')
    } )
  }


  getVendor(){
    this.api.getVendor()
    .subscribe( res => {
      this.vendorList =  res;
    }, error => this.errormsg = error)
  }

  deleteVendor(vendor:any){
    this.api.deleteVendor(vendor.id)
    .subscribe( res => {
     alert('card deleted')
     this.getVendor();
    }, err=> {
      alert('something went wrong')
    })
  }

  onEdit(card:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.vendorModelObj.id = card.id;
    this.vendorFormValue.controls['name'].setValue(card.name);
    this.vendorFormValue.controls['type'].setValue(card.type);
    this.vendorFormValue.controls['rating'].setValue(card.rating);
    this.vendorFormValue.controls['description'].setValue(card.description);
  }
 
  updateVendor(){
    this.vendorModelObj.name = this.vendorFormValue.value.name;
    this.vendorModelObj.rating = this.vendorFormValue.value.rating;
    this.vendorModelObj.description = this.vendorFormValue.value.description;
    this.vendorModelObj.type = this.vendorFormValue.value.type;

    this.api.updateVendor(this.vendorModelObj, this.vendorModelObj.id)
    .subscribe( res => {
      alert('data updated')
      console.log(res);
      this.getVendor();
      this.vendorFormValue.reset();
      let ref = document.getElementById('close');
      ref?.click();
    

    },
    err=> {
      alert('something went wrong')
    })
  }



  ngOnInit(): void {

    this.vendorFormValue = this.formBuilder.group({
        name : [''],
        type : [''],
        rating : [''],
        description : ['']

    })
    
    this.getVendor();

    this._activatedRoute.paramMap.subscribe( (params:ParamMap | any) => {
      let id = parseInt(params.get('id'));
      this.idSelected = id;
    })
  
  }
  onSelect(vendor:any){
      // this._router.navigate(['/vendors', vendor.id]);
      this._router.navigate([vendor.id],{relativeTo:this._activatedRoute})
  }

  selectedId(vendor:any){
    return vendor.id === this.idSelected;
  }

}
