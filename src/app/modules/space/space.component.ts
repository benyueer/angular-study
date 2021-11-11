import { ElementAst } from "@angular/compiler";
import { Component, ContentChild, ContentChildren, Directive, ElementRef, Input, QueryList, TemplateRef } from "@angular/core";

@Directive({
  selector: '[mySpaceItem]'
})
export class MySpaceItem {
  constructor(public templateRef: TemplateRef<unknown>) {}
}

@Component({
  selector: 'my-space',
  template: `
    <ng-content></ng-content>

    <ng-template ngFor let-item let-last="last" let-index="index" [ngForOf]="list">
      <ng-container [ngTemplateOutlet]="item.templateRef"></ng-container>
    </ng-template>
    <!-- <ng-container *ngFor="let item of list" [ngTemplateOutlet]="item"></ng-container> -->
  `
})
export class MySpaceComponent {
  @ContentChildren(MySpaceItem) list!: QueryList<MySpaceItem>
  // @ContentChild(MySpaceItem) list!: MySpaceItem
  // @ContentChildren(MySpaceItem) list!: QueryList<MySpaceItem>

  @ContentChild(MySpaceItem, {read: ElementRef}) c2!: ElementRef
  @ContentChild(MySpaceItem, {read: TemplateRef}) c3!: TemplateRef<MySpaceItem>

  ngAfterContentInit() {
    console.log(this.list)
  }
}

// 结构型指令不会出现在ng-content里，但可以通过@ContentChild拿到TmplateRef
// @ViewChild、@ContentChild的read属性表明读取的元素属性，从而得到TemplateRef供组建渲染
// 通过ng-container [ngTemplateOutlet]来控制container的内容渲染
