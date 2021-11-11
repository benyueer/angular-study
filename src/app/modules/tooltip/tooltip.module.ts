import { OverlayModule } from "@angular/cdk/overlay";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyDemoDirective, MyTooltipDemo } from "./demo.component";
import { MyTooltipComponent, MyTooltipDirective } from "./tooltip.component";

const routes: Routes = [
  {path: '', component: MyTooltipDemo}
]

@NgModule({
  declarations: [MyTooltipComponent, MyTooltipDirective, MyTooltipDemo, MyDemoDirective],
  imports: [RouterModule.forChild(routes), OverlayModule, CommonModule]
})
export class MyTooltipModule {

}
