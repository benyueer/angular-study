import { Component } from "@angular/core";
import { MyFormBulider, MyFormGroup } from "./my_form_bulider";

@Component({
  selector: 'my-form-demo',
  template: `
  <div>
    <form [myForm]="form">
      <label>name</label>
      <input myFormControlName="name">
      <label>age</label>
      <input myFormControlName="age">
    </form>
    <button (click)="getForm()">get form</button>
  </div>
  `
})
export class MyFormDemoComponent {
  form!: MyFormGroup
  form1!: MyFormGroup
  constructor(private myFormBuilder: MyFormBulider) {
    this.form = this.myFormBuilder.group({
      name: ['hello', []],
      age: [16, []]
    })
    console.log(this.form)
  }

  getForm() {
    console.log(this.form)
  }
}
