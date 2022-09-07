import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private _http: HttpClient) { }

  postLeave(data: any) {
    return this._http.post<any>("http://localhost:3000/leaves", data)
      .pipe(map((res: any) => {
        return res;
      }
      ))
  }

  getLeaves() {
    return this._http.get<any>("http://localhost:3000/leaves")
      .pipe(map((res: any) => {
        return res;
      }
      ))
  }

  approveRejectLeaves(id: any,data:any) {
    return this._http.put<any>("http://localhost:3000/leaves/"+id, data)
      .pipe(map((res: any) => {
        return res;
      }
      ))
  }

  deletetLeave(id:number ){
    return this._http.delete<any>("http://localhost:3000/leaves/"+id)
    .pipe(map( (res:any)=>{
      return res;
    }
    ))
  }
}
