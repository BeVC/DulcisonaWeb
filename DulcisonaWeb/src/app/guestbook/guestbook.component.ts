import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
    selector: 'app-guestbook',
    templateUrl: './guestbook.component.html',
    styleUrls: ['./guestbook.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class GuestbookComponent implements OnInit {

    // UI PROPERTIES
    showForm: boolean = false;

    constructor() { }

    ngOnInit() {
    }

    //#region UI Events
    uiOnSignGuestbookClicked() {
        this.showForm = true;
    }
    //#endregion

}
