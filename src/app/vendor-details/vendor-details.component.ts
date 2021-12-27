import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.scss']
})
export class VendorDetailsComponent implements OnInit {

  public vendorId : any;
  constructor(public _activatedRouter:ActivatedRoute, public _router:Router) { }

  ngOnInit() {

    // let vId = this._activatedRouter.snapshot.paramMap.get('id');
    // this.vendorId = vId;

    this._activatedRouter.paramMap.subscribe( (params:ParamMap | any) => {
      let vId = parseInt(params.get('id'));
      this.vendorId = vId;
    })
  }

  toPrev(){
    let prevId = this.vendorId - 1;
    // this._router.navigate(['vendors', prevId]);

    this._router.navigate([{id:prevId}], {relativeTo:this._activatedRouter})

  }

  toNext(){
    let nextId = this.vendorId + 1;
    // this._router.navigate(['vendors', nextId]);
    this._router.navigate([{id:nextId}],{relativeTo:this._activatedRouter})
  }

  goBack(){
    let backId = this.vendorId? this.vendorId : null;
    // this._router.navigate(['vendors', {id:backId} ])

    this._router.navigate(['../', {id:backId}], {relativeTo:this._activatedRouter})

  }


}
