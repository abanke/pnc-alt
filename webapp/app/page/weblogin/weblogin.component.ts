import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';




@Component({
  selector: 'app-weblogin',
  templateUrl: './weblogin.component.html',
  styleUrls: ['./weblogin.component.scss']
})
export class WebLoginComponent implements OnInit {
  public siteKey: any;
  
  token: string | undefined;
  public remember: boolean = false;
  authorizedUserform: UntypedFormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  private id: number;
  
  message = "";





  constructor(public translate: TranslateService,  private router: Router, private route: ActivatedRoute,  

    private formBuilder: UntypedFormBuilder,

    private cookieService: CookieService,


  ) {
    this.token = undefined;
   
    if (cookieService.get('remember') !== undefined) {
      if (cookieService.get('remember') == 'Yes') {
        this.authorizedUserform.value.email = this.cookieService.get('email');
        this.authorizedUserform.value.password = this.cookieService.get('password');
        this.authorizedUserform.value.remember = true;
      }
    }
    translate.addLangs(['English', 'Spanish']);
    translate.setDefaultLang('English');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/'English'|'Spanish'/) ? browserLang : 'English');
    this.id = parseInt(localStorage.getItem('authorizeduser_id'));
  }
  get authorizedUserf() { return this.authorizedUserform.controls; }

  ngOnInit() {
    console.info(this.id);
    this.authorizedUserform = this.formBuilder.group({
      email: [null],
      password: ['', [Validators.required]]
    });
    // this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  copyMessage(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  login() {
    this.submitted = true;


    this.dologin(this.authorizedUserf.email.value, this.authorizedUserf.password.value);
    
    

    // let isLoginSuccess = this.authenticationService.login(this.authorizedUserf.email.value, this.authorizedUserf.password.value)
    // .pipe(first()).subscribe(
    //   async data => {
    //     console.info('Data  ----'+data);
    //   }
    // );
    // console.info('Login ---- '+isLoginSuccess);
    // if (isLoginSuccess == true) {
    //   this.router.navigate([this.landingPage != null || typeof this.landingPage != 'undefined' ? this.landingPage : 'home']);
    // }else{
    //   this.alertService.error('Wrong credentials! Please contact Admin!');
    // }

    
  }

  
  logout() {
    
    // remove user from local storage to log user out
    localStorage.removeItem('userName');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('JwtToken');
    localStorage.removeItem('currentUser.roles');
  }

  dologin(email: string, password: string){
  
    if (email == 'admin@admin.com' && password == 'Admin@1234') {
      localStorage.setItem('userName', email);
      this.router.navigate([ 'home']);
      return true;
    }
    
  }


 



}
