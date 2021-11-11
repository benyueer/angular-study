import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MyFormGroup {
  myFormControls: any
  constructor() {
  }
  group(controls: any) {
    this.myFormControls = controls
    return controls
  }
}
