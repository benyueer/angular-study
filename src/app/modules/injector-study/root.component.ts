import { Component } from "@angular/core";
import { FlowerService } from "./a.service";

@Component({
    selector: 'my-inject-root',
    template: `
        <p>root flower: {{flowerSrv.flower}}</p>

        <my-inject-child></my-inject-child>
    `,
    providers: [
        {provide: FlowerService, useValue: {flower: '🌺'}}
    ]
})
export class MyInjectRootComponent {
    constructor(
        public flowerSrv: FlowerService
    ) {}
}
