import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MyFormGroup {
  myFormControls: any
  constructor() {
  }
  group(controls: any) {
    controls.get = this.get
    this.myFormControls = controls
    return controls
  }

  get(path: string[]) {
    console.log(this)
    console.log(path)
    let ctrl = this
    while(path.length) {
      // @ts-ignore
      ctrl = ctrl[path[0]]
      path.shift()
    }
    return ctrl
  }
}
