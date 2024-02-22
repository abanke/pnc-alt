import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-postloginfooter}',
  templateUrl: './postloginfooter.component.html',
  styleUrls: ['./postloginfooter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostLogInFooterComponent implements OnInit {

  constructor(public translate: TranslateService) {

  }

  ngOnInit() {


  }

}
