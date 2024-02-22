
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fileSelected: any;
  filePassword: string;

 

  constructor(public translate: TranslateService,
    private router: Router,
    
  ) {

    translate.addLangs(['English', 'Spanish']);
    translate.setDefaultLang('English');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/'English'|'Spanish'/) ? browserLang : 'English');
  }

  ngOnInit() {
    
    if(localStorage.getItem('userName') == null){
      this.router.navigateByUrl('/logout');
    }
  }
  

  

  
}
