import { Component, ElementRef, ViewChild } from "@angular/core";
import { fromEvent, Observable, Subject } from "rxjs";
import { distinctUntilChanged, filter, map, pluck, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'my-slider-demo',
  template: `
    <div #current style="width: 500px; height: 100px; backgroundColor: #678"></div>
  `

})
export class MySliderDemo {

  @ViewChild('current', {static: true}) current!: ElementRef

  handler$!: Observable<any>

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.bindEventHandler()
    this.subscribeClick()
  }


  bindEventHandler() {
    let dom = this.current.nativeElement

    this.handler$ = fromEvent(dom, 'click').pipe(
      filter(() => true),
      tap(() => {}),
      // map((e: any) => (e.target)),
      // pluck('pageX', 'pageY')
    )
  }

  subscribeClick() {
    this.handler$.subscribe((e) => console.log(e))
  }

}
