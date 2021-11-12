import { Component } from "@angular/core";
import { MyFormGroup } from "./my_form_bulider";

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
    <form [myForm]="form1">
      <label>data</label>
      <input myFormControlName="data">
    </form>
  </div>
  `
})
export class MyFormDemoComponent {
  form!: MyFormGroup
  form1!: MyFormGroup
  constructor(private myFormGroup: MyFormGroup) {
    this.form = this.myFormGroup.group({
      name: {value: 'heldadsadlo'},
      age: {value: 'world'}
    })
    this.form1 = this.myFormGroup.group({
      data: {value: 'hello'},
      age: {value: 'world'}
    })
  }

  getForm() {
    console.log(this.form)
  }
}
