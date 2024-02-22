import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostLogInHeaderComponent } from './header/postlogin/postloginheader.component';
import { PreLogInHeaderComponent } from './header/prelogin/preloginheader.component';
import {PostLogInFooterComponent} from './footer/postlogin/postloginfooter.component';
import {PreLogInFooterComponent} from './footer/prelogin/preloginfooter.component';
//import { HasRolesDirective } from '../helper/hasRoles.Directive';
import { DirectivesModule } from '../ui-modules/directive/directives.module';

import { AlertComponent } from './alert/alert.component'
import { MenuComponent } from './menu/menu.component'
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DirectivesModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
  ],
  exports: [
    PostLogInHeaderComponent,
    PreLogInHeaderComponent,
    PostLogInFooterComponent,
    PreLogInFooterComponent,
    MenuComponent,
    AlertComponent
  ],
  declarations: [
    //HasRolesDirective,
    PostLogInHeaderComponent,
    PreLogInHeaderComponent,
    PostLogInFooterComponent,
    PreLogInFooterComponent,
    MenuComponent,
    AlertComponent
  ]
})
export class LayoutModule { }
