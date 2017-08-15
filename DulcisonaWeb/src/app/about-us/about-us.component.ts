import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AboutUsComponent implements OnInit {

    toggle: boolean = true;

    constructor() { }

    ngOnInit() {
    }

    //#region UI Events
    uiOnToggleClicked() {
        this.toggle = !this.toggle;
    }
    //#endregion
}
