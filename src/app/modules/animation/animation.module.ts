import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyAnimationComponent } from "./animation.component";

const routes: Routes = [
  {path: '', component: MyAnimationComponent}
]

@NgModule({
  declarations: [MyAnimationComponent],
  imports: [RouterModule.forChild(routes)]
})
export class MyAnimationModule {}

