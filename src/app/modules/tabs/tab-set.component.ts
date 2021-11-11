import { Component, ElementRef, TemplateRef, ViewChild } from "@angular/core";

@Component({
  selector: 'my-tab-set',
  template: `
    <p my-tab-body [content]="content">own</p>
    <!-- <div *my-tab-body="content">own</div> -->
    <!-- <p #content>content</p> -->
    <ng-template #content>content from tabset</ng-template>

  `
})
export class MyTabSetComponent {
  @ViewChild('content', {read: TemplateRef}) content!: TemplateRef<unknown>
}

