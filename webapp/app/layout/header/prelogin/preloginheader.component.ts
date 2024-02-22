import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit,ChangeDetectionStrategy} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-preloginheader}',
  templateUrl: './preloginheader.component.html',
  styleUrls: ['./preloginheader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreLogInHeaderComponent implements OnInit {
    closeResult: string;
    form: UntypedFormGroup;
    base64image : string;
  constructor(public translate: TranslateService,private modalService: NgbModal,
  private formBuilder:UntypedFormBuilder,private router: Router) {

  }
get f() { return this.form.controls; }

  ngOnInit() {
    console.info(this.router);
   this.base64image='';

  this.form = this.formBuilder.group({
      subject:[null],
      message:[null],
      screenPath:[null]
   });


  }
 ngAfterViewInit(): void {
   
  }

  toogleSideBar() {
      var body = document.getElementsByTagName('body')[0];
      if( document.body.className.match('sidebar-open') ) {
          document.body.classList.remove('sidebar-open')
       }else {
          body.classList.add('sidebar-open');
       }
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
            localStorage.removeItem('currentUser.id');
            localStorage.removeItem('JwtToken');
            localStorage.removeItem('currentUser.roles');
        }


}
