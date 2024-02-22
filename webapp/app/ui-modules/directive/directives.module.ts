import { NgModule } from "@angular/core";
import { HasRolesDirective } from "./directive/hasRoles.Directive";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [HasRolesDirective],
  exports: [HasRolesDirective]
})

export class DirectivesModule {}