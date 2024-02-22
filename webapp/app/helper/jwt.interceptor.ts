import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = localStorage.getItem('JwtToken');
        //let tenantID=localStorage.getItem('tenantId');
        if (currentUser ) {
            request = request.clone({
                setHeaders: {
                    Authorization:  currentUser
                  //  'TenantID':tenantID
                }
            });
        }

        return next.handle(request);
    }
}