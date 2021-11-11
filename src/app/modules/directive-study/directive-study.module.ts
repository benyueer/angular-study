import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DirectiveEventComponent } from "./someevent.component";
import { SomeEventDirective } from "./someevent.directive";
import { ViewDirectiveComponent } from "./view.component";

const routes: Routes = [
  {
    path: '', component: ViewDirectiveComponent
  }
]

@NgModule({
  declarations: [ViewDirectiveComponent, SomeEventDirective, DirectiveEventComponent],
  imports: [RouterModule.forChild(routes), CommonModule]
})
export class DirectiveStudyModule{}
