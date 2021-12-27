
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map} from 'rxjs/operators';
import { throwError } from 'rxjs';
// import { identifierModuleUrl } from '@angular/compiler';





@Injectable({
  providedIn: 'root'
})
export class ApiService {

  postVendor(card:any){
    return this.api.post<any>('http://localhost:3000/posts',card)
    .pipe(map ( res => {
     return res
    }))}

    getVendor(){
      return this.api.get<any>('http://localhost:3000/posts')
      .pipe ( catchError(this.errorHandler),  map(res => {
        return res
      }))}

      errorHandler(error: HttpErrorResponse){
        return throwError (error.message || 'unknown error response')
      }

    deleteVendor(id:any){
      return this.api.delete<any>('http://localhost:3000/posts/'+id)
      .pipe(map( (res:any)=> {
        return res
      }))
    }

    updateVendor(data:any, id:any){
      return this.api.put<any>('http://localhost:3000/posts/'+id, data)
      .pipe(map ((res:any) => {
        return res
      }))
    }



  constructor(private api:HttpClient) { }

  }


