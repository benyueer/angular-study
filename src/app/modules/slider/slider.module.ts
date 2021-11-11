import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MySliderDemo } from "./demo.component";
import { MySliderComponent } from "./slider.component";


const routes: Routes = [
  {path: '', component: MySliderDemo}
]
@NgModule({
  declarations: [MySliderComponent, MySliderDemo],
  imports: [RouterModule.forChild(routes)]
})
export class MySliderModule {}

