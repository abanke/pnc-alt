import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthGuard } from './helper/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ProcessService } from './service/process.service';
import { DataTablesModule } from "angular-datatables";
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppConstants } from './AppConstants';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component'
import { AlertService } from './helper/alert.service';
//import {NgxCaptchaModule} from 'ngx-captcha';


import { DefaultService } from '../app/service/default.service';
import { ForgotPasswordDtoService } from '../app/service/forgotpassworddto.service';
import { ResetPasswordDtoService } from '../app/service/resetpassworddto.service';

import { AuthenticationService } from '../app/helper/authentication.service';

import { JwtInterceptor } from '../app/helper/jwt.interceptor';
import { ErrorInterceptor } from '../app/helper/error.interceptor'
import { MatDialogModule } from '@angular/material/dialog';
//import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component'
import { LayoutModule } from './layout/layout.module';
import { DirectivesModule } from './ui-modules/directive/directives.module';
import { DpDatePickerModule } from 'ng2-date-picker';
import { MatStepperModule } from '@angular/material/stepper';

//import { MenuComponent } from '../app/menu/menu.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(
    httpClient,
    './assets/i18n/',
    '-lang.json'
  );
}



import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { HeaderComponent } from './page/proto/common/header/header.component';
import { PerformanceDashboardComponent } from './page/proto/performance-dashboard/performance-dashboard.component';
@NgModule({
    declarations: [
        AppComponent,
        BreadcrumbComponent,
        AlertDialogComponent,
        HeaderComponent,
        PerformanceDashboardComponent,
    ],
    imports: [
        BrowserModule,
        //  NgxCaptchaModule,
        AppRoutingModule,
        HttpClientModule,
        DataTablesModule,
        DpDatePickerModule,
        LayoutModule,
        DirectivesModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        ModalModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        BrowserAnimationsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        MatCheckboxModule,
        MatStepperModule
    ],
    providers: [
        AuthGuard,
        HttpClientModule,
        HttpClient,
        AppConstants,
        AuthenticationService,
        AlertService,
        JwtHelperService,
        DataTablesModule,
        ProcessService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        DefaultService,
        ForgotPasswordDtoService,
        ResetPasswordDtoService,
        BsModalRef
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    bootstrap: [AppComponent],
    exports: [
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
    ]
})
export class AppModule { }
