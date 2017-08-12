import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SoundComponent } from './sound/sound.component';
import { PictureComponent } from './picture/picture.component';
import { GuestbookComponent } from './guestbook/guestbook.component';
import { OfferComponent } from './offer/offer.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        NotFoundComponent,
        AboutUsComponent,
        SoundComponent,
        PictureComponent,
        GuestbookComponent,
        OfferComponent,
        ContactComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
