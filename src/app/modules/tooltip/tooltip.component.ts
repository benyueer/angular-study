import { Component, Directive, ElementRef, TemplateRef, ViewChild, ViewContainerRef } from "@angular/core";
import {
  CdkOverlayOrigin,
  Overlay,
  CdkConnectedOverlay,
  ConnectedOverlayPositionChange,
  ConnectionPositionPair
} from '@angular/cdk/overlay'

@Component({
  selector: 'my-tooltip',
  template: `
  <button (click)="show = !show">{{show}}</button>
  <div style="border: 1px solid red;" cdkOverlayOrigin #trigger="cdkOverlayOrigin">123</div>
    <ng-template
      [cdkConnectedOverlayOpen]='show'
      [cdkConnectedOverlayOrigin]="trigger"
      [cdkConnectedOverlayOffsetX]='200'
      cdkConnectedOverlay
    >
      <div>overlay</div>
    </ng-template>

  `
})
export class MyTooltipComponent {
  show = false

  @ViewChild(CdkOverlayOrigin, { static: false }) _overlayOrigin!: CdkOverlayOrigin
  @ViewChild('overlay', { static: false }) overlayTemplate!: TemplateRef<unknown>

  constructor(private overlay: Overlay) { }
}


@Directive({
  selector: '[my-tooltip]'
})
export class MyTooltipDirective {
  constructor(
    private elementRef: ElementRef,
    private hostView: ViewContainerRef,
    private templateRef: TemplateRef<unknown>
  ) {
    console.log(elementRef, hostView, templateRef)
  }
  ngOnInit(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    setTimeout(()=> {
      this.hostView.createEmbeddedView(this.templateRef)
    }, 3000)
  }
}

// 属性型指令作用在HTML标签（DOM）上，可以拿到ElementRef， ViewContainerRef，使用属性型指令，可以更改 DOM 元素和 Angular 组件的外观或行为
// 结构型指令作用在ng-template标签上，可以拿到TemplateRef，可以添加或移除DOM
// 组件是有template的指令， 相当于一个属性型指令, 其selector是元素选择器
