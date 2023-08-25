import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private _http:HttpClient) { }

  // validate signin
  public validateUser(user:any){
    return this._http.post(`https://portfoliosignup-production.up.railway.app/user/validate`,user);
  }


}
