import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyAComponent } from "./a.component";
import { MyAService } from "./a.service";
import { MyBComponent } from "./b.component";
import { MyInjectChildCompoent } from "./child.component";
import { MyInjectComponent } from "./inject.component";
import { MyInjectRootComponent } from "./root.component";

const routes: Routes = [
  {path: '', component: MyInjectRootComponent}
]

@NgModule({
  declarations: [MyAComponent, MyBComponent, MyInjectComponent, MyInjectRootComponent, MyInjectChildCompoent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class MyInjectModule {}
