import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyAComponent } from "./a.component";
import { MyBComponent } from "./b.component";
import { MyInjectComponent } from "./inject.component";

const routes: Routes = [
  {path: '', component: MyInjectComponent}
]

@NgModule({
  declarations: [MyAComponent, MyBComponent, MyInjectComponent],
  imports: [RouterModule.forChild(routes), CommonModule]
})
export class MyInjectModule {}
