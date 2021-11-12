import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: 'input:not([type=checkbox])[myFormControlName]',
    host: {
        '(input)': '_handleInput($event.target.value)'
    }
})
export class MyDefaultValueAccessorDirective {

    constructor(
        private _render: Renderer2,
        private elemeneRef: ElementRef
    ) { }

    writevalue(value: any) {
        console.log(value)
        const normalizedValue = value == null ? '' : value
        this.setProperty('value', normalizedValue)
    }

    setProperty(key: string, value: any) {
        this._render.setProperty(this.elemeneRef.nativeElement, key, value)
    }

    _handleInput(value: any) {
        this.onChange(value)
    }

    onChange = (_: any) => {

    }
    registerOnChange(fn: (_: any)=>any) {
        this.onChange = fn
    }


}
