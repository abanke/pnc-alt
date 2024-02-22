import { TranslateService } from '@ngx-translate/core';
import {  Component,  OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutUsComponent implements OnInit {














  constructor(public translate: TranslateService) {




  	        translate.addLangs(['English', 'Spanish']);
    translate.setDefaultLang('English');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/'English'|'Spanish'/) ? browserLang : 'English');
             }





  ngOnInit() {



  }



	copyMessage(val: string){

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










  FormatDate(dt: Date) {
      var datePipe = new DatePipe("en-US");
  	let formatedyear = datePipe.transform(dt, 'yyyy-MM-dd');
       return formatedyear;
   }




}
