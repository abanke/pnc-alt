import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { AppConstants } from '../AppConstants';

@Injectable()
export class DefaultService {

public httpOptions : any;

  constructor(private _http : HttpClient,private appConstant: AppConstants) {

  }


           public  logoutApi( ){
                       return this._http.put(this.appConstant.baseAppUrl+"/api/logout","");
                             }
            public  validateToken( ){
                       return this._http.post(this.appConstant.baseAppUrl+"/api/checkToken","");
                         }
      //<><  Profile
     public profile(){

           return this._http.get(this.appConstant.baseAppUrl+"/api/profile");
     }
      //<><  AboutUs
     public aboutUs(){

           return this._http.get(this.appConstant.baseAppUrl+"/api/aboutUs");
     }
      //<><  Facebook
     public facebook(){

           return this._http.get(this.appConstant.baseAppUrl+"/api/facebook");
     }
      //<><  Twitter
     public twitter(){

           return this._http.get(this.appConstant.baseAppUrl+"/api/twitter");
     }
      //<><  LinkedIn
     public linkedIn(){

           return this._http.get(this.appConstant.baseAppUrl+"/api/linkedIn");
     }
      //<><  WebLogin
     public webLogin(){

           return this._http.get(this.appConstant.baseAppUrl+"/api/webLogin");
     }
      //<><  WebForgotPassword
     public webForgotPassword(){

           return this._http.get(this.appConstant.baseAppUrl+"/api/webForgotPassword");
     }
      //<><  MobileForgotPassword
     public mobileForgotPassword(){

           return this._http.get(this.appConstant.baseAppUrl+"/api/mobileForgotPassword");
     }
      //<><  Home
     public home(){

           return this._http.get(this.appConstant.baseAppUrl+"/api/home");
     }
}