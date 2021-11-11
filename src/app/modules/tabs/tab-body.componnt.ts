import { ChangeDetectorRef, Component, Input, TemplateRef } from "@angular/core";

@Component({
  selector: '[my-tab-body]',
  template: `
    <ng-container>
      <div [style.backgroundColor]="getBgc()" (click)="onClick()">
        tabs
      </div>
      <ng-template [ngTemplateOutlet]="content"></ng-template>
    </ng-container>
  `
})

export class MyTabBodyComponent {
  @Input() content: TemplateRef<void> | null = null
  bgcList = [
    '#123', '#345', '#567'
  ]
  index = 0


  constructor(private cdr: ChangeDetectorRef) {}


  ngAfterContentChecked(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    // this.bgc = this.getBgc()
    // setTimeout(() => {
    //   // this.cdr.markForCheck()
    //   this.cdr.detectChanges()
    // }, 1000)
  }


  getBgc() {
    // return `#${this.getRandom()}${this.getRandom()}${this.getRandom()}`
    return this.bgcList[this.index]
  }
  getRandom() {
    return Math.floor(Math.random() * 100)
  }

  onClick() {
    this.index = (this.index+1)%3
    this.cdr.detectChanges()
  }
}
