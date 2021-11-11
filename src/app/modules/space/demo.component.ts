import { Component } from "@angular/core";

@Component({
  selector: 'my-space-demo',
  template: `
    <my-space>
      <ng-template mySpaceItem>
        span
      </ng-template>
      <ng-template mySpaceItem>
        span
      </ng-template>

      <p>1</p>
      <p *mySpaceItem>2</p>
      <p *mySpaceItem>3</p>
      <p *ngFor="let item of list">{{item}}</p>
      <p *mySpaceItem></p>
    </my-space>
  `
})
export class MySpaceDemoComponent {
  list = ['a', 'b', 'c']
}
