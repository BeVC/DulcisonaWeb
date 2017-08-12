import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// COMPONENTS
import { NotFoundComponent } from "./not-found/not-found.component";
import { AboutUsComponent } from './about-us/about-us.component';
import { SoundComponent } from './sound/sound.component';
import { PictureComponent } from './picture/picture.component';
import { GuestbookComponent } from './guestbook/guestbook.component';
import { OfferComponent } from './offer/offer.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
    { path: "", redirectTo: "", pathMatch: "full" },
    { path: "**", component: NotFoundComponent },
    { path: "about-us", component: AboutUsComponent },
    { path: "sound", component: SoundComponent },
    { path: "picture", component: PictureComponent },
    { path: "guestbook", component: GuestbookComponent },
    { path: "offer", component: OfferComponent },
    { path: "contact", component: ContactComponent }

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}