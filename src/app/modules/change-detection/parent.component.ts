import { Component, ComponentFactoryResolver, ViewContainerRef } from "@angular/core";

@Component({
  selector: 'app-change-detection-parent',
  templateUrl: './parent.component.html'
})
export class ChangeDetectionComponent {
  data: string = 'hello'

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // this.data = 'world'

    console.log(this.viewContainerRef)
    const componentFectory = this.componentFactoryResolver.resolveComponentFactory(ChangeDetectionComponent)
    console.log(componentFectory)
  }
}
