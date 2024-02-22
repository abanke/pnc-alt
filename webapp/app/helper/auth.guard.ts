import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(_next: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
      console.info(this.router);
      return true;
      
      //   const allowedRoles = next.data.allowedRoles;
      //   const isAuthorized = this.authorizationService.isAuthorized(allowedRoles);
       
      // if (!isAuthorized) {
      //     this.router.navigate(['accessdenied']);
      //   }

      // return isAuthorized;
      
      }

      canActivateChild(_next: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
        
        return false;
      
        //   const allowedRoles = next.data.allowedRoles;
      //   const isAuthorized = this.authorizationService.isAuthorized(allowedRoles);

      // if (!isAuthorized) {
      //     this.router.navigate(['accessdenied']);
      //   }

      // return isAuthorized
      }
}