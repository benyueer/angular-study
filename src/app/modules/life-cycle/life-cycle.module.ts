import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LifeCycleParentComponent } from "./parent.component";
import { NzCardModule } from 'ng-zorro-antd/card';


const routes: Routes = [
  {
    path: '',
    component: LifeCycleParentComponent
  }
]

@NgModule({
  declarations: [LifeCycleParentComponent],
  imports: [RouterModule.forChild(routes), NzCardModule]
})
export class LifeCycleModule {}
