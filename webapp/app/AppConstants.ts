import { Injectable } from '@angular/core';
import { environment } from 'webapp/environments/environment';

@Injectable()
export class AppConstants {
    readonly baseAppUrl: string = environment.baseUrl;
    readonly twofactor: string = 'false';
    readonly oauthTokenUrl: string='http://localhost:8081/spring-security-oauth-server/oauth/token';
    readonly grant_type: string='password';
    readonly client_id:string ='app';
    readonly client_secret:string='secret';
}
