import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MySpaceDemoComponent } from "./demo.component";
import { MySpaceComponent, MySpaceItem } from "./space.component";

const routes: Routes = [
  {path: '', component: MySpaceDemoComponent}
]

@NgModule({
  declarations: [MySpaceComponent, MySpaceItem, MySpaceDemoComponent],
  imports: [RouterModule.forChild(routes), CommonModule]
})
export class MySpaceModule {}
