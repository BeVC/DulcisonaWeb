import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
    selector: 'app-offer',
    templateUrl: './offer.component.html',
    styleUrls: ['./offer.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class OfferComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }


    //#region UI Events
    uiOnDownloadSponsorBrochureClicked() {
        console.log("Download PDF here.");

        //Will need to figure out how to do a request for a pdf download
    }
    //#endregion
}
