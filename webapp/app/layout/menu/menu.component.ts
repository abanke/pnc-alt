import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationStart,Event } from '@angular/router';

@Component({
  selector: 'app-menu}',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {

  navbarOpen = false;

    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    }
      

  constructor(public translate: TranslateService,private router: Router) {
       
    router.events.subscribe( (event: Event) => {
                if (event instanceof NavigationStart) {
                    document.body.classList.remove('sidebar-open')
                }
            });
  }

  ngOnInit() {
    console.info(this.router);

  }

 toogleSideBar() {
    var body = document.getElementsByTagName('body')[0];
    if( document.body.className.match('sidebar-open') ) {
        document.body.classList.remove('sidebar-open')
     }else {
        body.classList.add('sidebar-open');
     }
  }



 logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser.id');
        localStorage.removeItem('JwtToken');
        localStorage.removeItem('currentUser.roles');
    }
}
