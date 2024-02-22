import { TranslateService } from '@ngx-translate/core';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import AOS from 'aos';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
AOS.init();
AOS.init({
   // Global settings:
   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
   initClassName: 'aos-init', // class applied after initialization
   animatedClassName: 'aos-animate', // class applied on animation
   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
   offset: 120, // offset (in px) from the original trigger point
   delay: 0, // values from 0 to 3000, with step 50ms
   duration: 400, // values from 0 to 3000, with step 50ms
   easing: 'ease', // default easing for AOS animations
   once: false, // whether animation should happen only once - while scrolling down
   mirror: false, // whether elements should animate out while scrolling past them
   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
 });
 declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  showPostHeader = false;
  showPostFooter = false;
  showPreHeader = false;
  showPreFooter = false;
  showSidebar = false;
constructor(translate: TranslateService,private router: Router, private activatedRoute: ActivatedRoute) {

      // const script = document.createElement('script');
      //     script.async = true;
      //     script.src = 'https://www.googletagmanager.com/gtag/js?id=' + environment.code;
      //     document.head.prepend(script);

        const navEndEvent$ = router.events.pipe(
          filter(e => e instanceof NavigationEnd)
        );
        navEndEvent$.subscribe((e: NavigationEnd) => {
          if (e instanceof NavigationEnd) {
            gtag('set', 'page', e.urlAfterRedirects);
            gtag('send', 'pageview');
          }
          // gtag('config', environment.code,
          //  {'page_path':e.urlAfterRedirects}
          //  );
        });

      translate.addLangs(['English']);
      translate.setDefaultLang('English');
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/'English'/) ? browserLang : 'English');
    }
      ngOnInit() {
       window.scroll(0,0);
       this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.showPostHeader = this.activatedRoute.firstChild.snapshot.data.showPostHeader !== false;
          this.showSidebar = this.activatedRoute.firstChild.snapshot.data.showSidebar !== false;
          this.showPostFooter = this.activatedRoute.firstChild.snapshot.data.showPostFooter !== false;
          this.showPreHeader = this.activatedRoute.firstChild.snapshot.data.showPreHeader !== false;
          this.showPreFooter = this.activatedRoute.firstChild.snapshot.data.showPreFooter !== false;

        }
      });
      }
}
