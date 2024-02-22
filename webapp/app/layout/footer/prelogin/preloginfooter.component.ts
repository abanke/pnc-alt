import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-preloginfooter}',
  templateUrl: './preloginfooter.component.html',
  styleUrls: ['./preloginfooter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreLogInFooterComponent implements OnInit {

  constructor(public translate: TranslateService) {

  }

  ngOnInit() {


  }

}
