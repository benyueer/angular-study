import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyFormDemoComponent } from "./demo.component";
import { MyFormDirective } from "./directives/my_form.directive";
import { MyFormControlName } from "./directives/my_form_control_name.directive";

const routes: Routes = [
  {path: '', component: MyFormDemoComponent}
]

@NgModule({
  declarations: [MyFormControlName, MyFormDirective, MyFormDemoComponent],
  imports: [RouterModule.forChild(routes)]
})
export class MyFormMoudle {}
