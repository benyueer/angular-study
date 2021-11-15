import { Component } from "@angular/core";
import { FlowerService } from "./a.service";

@Component({
    selector: 'my-inject-child',
    template: `
    <p>child flower: {{flowerSrv.flower}}</p>
    `,
    providers: [
        {provide: FlowerService, useValue: {flower: '🌻'}}
    ]
})
export class MyInjectChildCompoent {

    constructor(
        public flowerSrv: FlowerService
    ) {}
}
