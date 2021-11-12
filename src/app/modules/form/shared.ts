import { MyFormControlName } from "./directives/my_form_control_name.directive";

export function setUpControl(control: any, dir: MyFormControlName) {
    dir.myDefaultValueAccessorDirective.writevalue(control.value)
    setUpViewChangePipeline(control, dir)
}

export function controlPath(name: string, control: any) {
    return [...control.path, name]
}

function setUpViewChangePipeline(control: any, dir: MyFormControlName) {
    dir.myDefaultValueAccessorDirective.registerOnChange((newValue: any) => {
        control.value = newValue
    })
    // control.registerOnChange(onchange)
}

function setUpModelChangePipeline(control: any, dir: MyFormControlName) {
    
}
