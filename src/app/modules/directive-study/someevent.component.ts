import { Component } from "@angular/core";

@Component({
  selector: 'app-directive-event',
  template: `
    <p>comp-event</p>
  `,
  host: {
    '(click)':'onClick($event)',
    '[value]': '"eventdata"',
    '[class.bred]': 'true'
  }
})
export class DirectiveEventComponent {
  onClick() {
    alert('zxc')
  }
}
