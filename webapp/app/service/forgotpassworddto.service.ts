import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { AppConstants } from '../AppConstants';

@Injectable()
export class ForgotPasswordDtoService {

public httpOptions : any;

  constructor(private _http : HttpClient,private appConstant: AppConstants) {

  }


       findOne(id: number){

              return this._http.post(this.appConstant.baseAppUrl+"/api/forgotPasswordDto/findOne/"+id,"");
        }

        delete(id: number){

                    return this._http.post(this.appConstant.baseAppUrl+"/api/forgotPasswordDto/delete/"+id,"");
          }

}