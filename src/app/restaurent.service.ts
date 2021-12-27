import { Injectable } from '@angular/core';
import { restaurentArray } from '../../src/app/services/restaurents'

@Injectable({
  providedIn: 'root'
})
export class RestaurentService {

  getRestaurentDetails(){
  return restaurentArray;
  }
  
  constructor() { }
}
