import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { AppConstants } from '../AppConstants';

@Injectable()
export class ResetPasswordDtoService {

public httpOptions : any;

  constructor(private _http : HttpClient,private appConstant: AppConstants) {

  }


      //<><  ValidateUser
     public  validateUser( token:string  ){



            return this._http.get(this.appConstant.baseAppUrl+"/api/resetPasswordDto/validateUser/"+ token );
     }
      //<><  ActivateUser
     public  activateUser( token2:string  ){



            return this._http.get(this.appConstant.baseAppUrl+"/api/resetPasswordDto/activateUser/"+ token2 );
     }
      //<><  ResetPassword
     public  resetPassword(encrypteddata: any  ){
let formdata = new FormData();

formdata.append("encrypteddata", encrypteddata);



             return this._http.post(this.appConstant.baseAppUrl+"/api/resetPasswordDto/resetPassword",formdata);
     }
       findOne(id: number){

              return this._http.post(this.appConstant.baseAppUrl+"/api/resetPasswordDto/findOne/"+id,"");
        }

        delete(id: number){

                    return this._http.post(this.appConstant.baseAppUrl+"/api/resetPasswordDto/delete/"+id,"");
          }

}