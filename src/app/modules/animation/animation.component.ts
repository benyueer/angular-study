import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
  selector: 'my-animate',
  template: `
    <div class="ani-div" [@ani]="status"></div>
  `,
  styles: [`
    .ani-div {
      width: 100px;
      height: 100px;
      border: 1px red solid;
    }
  `],
  animations: [
    trigger('ani', [
      state('start', style({background: 'red'})),
      state('end', style({background: '#234'})),
      transition('start <=> end', animate(1000)),
      transition(':enter', animate(1000, style({width: '1000px'})))
    ])
  ]
})
export class MyAnimationComponent {
  status: string = 'start'

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setInterval(() => {
      this.status = Math.floor(Math.random()*10)%2 === 0 ? 'start' : 'end'
      console.log(this.status)
    }, 1000)
  }

}
