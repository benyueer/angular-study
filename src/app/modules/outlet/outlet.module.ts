import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyForDirective } from "./myFor.directive";
import { MyOutletAComponent, MyOutletBComponent } from "./outlet.component";

const routes: Routes = [
  {path: '', component: MyOutletAComponent}
]

@NgModule({
  declarations: [MyOutletAComponent, MyOutletBComponent, MyForDirective],
  imports: [RouterModule.forChild(routes), CommonModule]
})
export class MyOutLetModule {

}
