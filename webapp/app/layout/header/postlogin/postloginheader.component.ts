import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit,ChangeDetectionStrategy ,ChangeDetectorRef} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from '../../../helper/authentication.service';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription} from "rxjs";

@Component({
  selector: 'app-postloginheader}',
  templateUrl: './postloginheader.component.html',
  styleUrls: ['./postloginheader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostLogInHeaderComponent implements OnInit {
subscription: Subscription;
    userName:string;
    image:any;
    closeResult: string;
    form: UntypedFormGroup;
    base64image : string;
  constructor(public translate: TranslateService,private modalService: NgbModal,
  private authenticationService:AuthenticationService,private formBuilder:UntypedFormBuilder, private ref: ChangeDetectorRef,private domSanitizer: DomSanitizer,private router: Router) {

  }
get f() { return this.form.controls; }

  ngOnInit() {
    document.getElementById("loader_wrapper").classList.add("show");
   
   this.base64image='';

  this.form = this.formBuilder.group({
      subject:[null],
      message:[null],
      screenPath:[null]
   });


  }
 ngAfterViewInit(): void {
 setTimeout(function(){
      document.getElementById("loader_wrapper").classList.remove("show");
    },2000);    
   
  }

  toogleSideBar() {
      var body = document.getElementsByTagName('body')[0];
      if( document.body.className.match('sidebar-open') ) {
          document.body.classList.remove('sidebar-open')
       }else {
          body.classList.add('sidebar-open');
       }
  }
   public getUserDetails(): void {
        this.authenticationService.getUserDetails().subscribe((response: any)=>{
          this.userName = response.firstName;
          this.image = this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + response.userImage);
          this.ref.detectChanges();
        });
      }

   open(content) {
					  html2canvas(document.body).then(canvas => {
						this.base64image = canvas.toDataURL('image/png');
						this.modalFunction(content);
					  });
                      }


    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

   modalFunction(content) {
							  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
								this.closeResult = `Closed with: ${result}`;
							  }, (reason) => {
								this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
							  });
                             }


    appAdmin() {
      window.location.href="http://localhost:9090/appadmin/#/applications";
    }



    sendEmail( ){

      

    }

    logout() {
             this.subscription.unsubscribe();
              
            localStorage.removeItem('currentUser.id');
            localStorage.removeItem('JwtToken');
            localStorage.removeItem('currentUser.roles');
            this.router.navigate(['weblogin']);
        }


}
