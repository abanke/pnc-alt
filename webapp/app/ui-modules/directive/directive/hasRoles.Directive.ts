import { ViewContainerRef, TemplateRef, Input, Directive } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";

@Directive({
  selector: '[hasRoles]',
  inputs: ['hasRoles']
})
export class HasRolesDirective {

  constructor(private _templateRef: TemplateRef<any>,
              private _viewContainer:  ViewContainerRef,
              ) {

  }

  @Input() set hasRoles(allowedRoles: Array<string>) {
    let shouldShow: boolean = false;
    const helper = new JwtHelperService();
                 
               const token= localStorage.getItem('JwtToken');
               const code =  helper.decodeToken(token);

    let userRoles :  string[]  = code.roles;
    for(let role of userRoles){

      for(let allowedRole of allowedRoles){
        allowedRole = allowedRole.toUpperCase();
        if(allowedRole.toUpperCase() == role.toUpperCase()){
          shouldShow = true;
          break;
        }
      }
    }
    if (shouldShow) {
       
      this._viewContainer.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainer.clear();
    }
  }

}