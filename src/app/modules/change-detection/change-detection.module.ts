import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NzCardModule } from "ng-zorro-antd/card";
import { ChangeDetectionComponent } from "./parent.component";

const routes: Routes = [
  {
    path: '',
    component: ChangeDetectionComponent
  }
]

@NgModule({
  declarations: [ChangeDetectionComponent],
  imports: [RouterModule.forChild(routes), NzCardModule]
})
export class ChangeDetectionModule {}
