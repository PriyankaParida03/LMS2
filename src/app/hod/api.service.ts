import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private _http : HttpClient) { }

  postStaff(data:any){
    return this._http.post<any>("http://localhost:3000/sms",data)
    .pipe(map( (res:any)=>{
      return res;
    }
    ))
  }
  getStaff(data: any){
    return this._http.get<any>("http://localhost:3000/sms", )
    .pipe(map( (res:any)=>{
      return res;
    }
    ))
  }
  updatetStaff(data:any, id:string){
    return this._http.put<any>("http://localhost:3000/sms",+id,data)
    .pipe(map( (res:any)=>{
      return res;
    }
    ))
  }
  deletetStaff(id:number ){
    return this._http.delete<any>("http://localhost:3000/sms/"+id)
    .pipe(map( (res:any)=>{
      return res;
    }
    ))
  }

}
  