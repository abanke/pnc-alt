import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../AppConstants';
// import * as AWS from 'aws-sdk/global';


@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient, private appConstants: AppConstants) { }







  //  login(email: string, password: string) {
  //     return this.http.post<any>(this.appConstants.baseAppUrl+`/api/login`, { loginId: email, password: password })
  //     .pipe(map(jwtResponse => {

  //         if (jwtResponse && jwtResponse.accessToken) {
  //             let tokenStr= jwtResponse.tokenType+' '+jwtResponse.accessToken;
  //             const helper = new JwtHelperService();
  //             let code =  helper.decodeToken(jwtResponse.accessToken);
  //             localStorage.setItem('JwtToken',tokenStr);
  //             localStorage.setItem('tenantId',code.tenantId);
  //             localStorage.setItem('currentUser.id', code.sub);
  //             localStorage.setItem('currentUser.roles',code.roles);
  //         }
  //         return jwtResponse;
  //     }));
  // }


  sendSecureCode() {
    let id = localStorage.getItem('currentUser.id');
    return this.http.post(this.appConstants.baseAppUrl + "/api/sendSecureCode/" + id, "");
  }





  getsupport() {
    return this.http.get(this.appConstants.baseAppUrl + "/api/get/support");
  }

  getUserDetails() {
    return this.http.get(this.appConstants.baseAppUrl + "/api/get/getUserDetails");
  }


  
  validateToken(token: string) {

    return this.http.get(this.appConstants.baseAppUrl + "/api/validateUserToken/" + token);
  }

  isAuthorized(allowedRoles: string[]): boolean {
    // check if the list of allowed roles is empty, if empty, authorize the user to access the page
    if (allowedRoles == null || allowedRoles.length === 0) {
      return true;
    }

    var role = localStorage.getItem('currentUser.roles');

    // check if the user roles is in the list of allowed roles, return true if allowed and false if not allowed
    return allowedRoles.includes(role);
  }

  isTwoFactorAuthentication(currentUserId: any) {
    return this.http.get(this.appConstants.baseAppUrl + "/api/isTwoFactorAuthentication/" + currentUserId);
  }

  doLogOut() {
    
  }

}