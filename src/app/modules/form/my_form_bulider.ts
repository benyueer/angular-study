import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class MyFormBulider {
  constructor() {
  }
  group(controlsConfig: {[key: string]: any}) {
    const controls = this._reduceControls(controlsConfig)
    return new MyFormGroup(controls)
  }

  private _reduceControls(controlsConfig: {[key: string]: []}): {[key: string]: MyFormControl} {
    const controls: {[key: string]: MyFormControl} = {}
    Object.keys(controlsConfig).forEach(key => {
      controls[key] = new MyFormControl(controlsConfig[key])
    })
    return controls
  }

}

export class MyFormControl{
  value: any
  valid: boolean = false
  validators: any[] = []
  constructor(controlConfig: Array<any>) {
    this.value = controlConfig[0]
    this.validators = controlConfig[1]
  }

  _updateValueAndValidity() {
    
  }
}

export class MyFormGroup {
  controls: any
  valid: boolean = false
  constructor(controls: {[key: string]: MyFormControl}) {
    this.controls = controls
  }

  get(path: string[]) {
    let ctrl = this.controls

    while(path.length) {
      ctrl = ctrl[path[0]]
      path.shift()
    }
    return ctrl
  }
}
