import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyTabBodyComponent } from "./tab-body.componnt";
import { MyTabSetComponent } from "./tab-set.component";

const routes: Routes = [
  {path: '', component: MyTabSetComponent}
]

@NgModule({
  declarations: [MyTabBodyComponent, MyTabSetComponent],
  imports: [RouterModule.forChild(routes), CommonModule]
})
export class TabsModule {}
