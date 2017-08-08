import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// COMPONENTS
//import { NotFoundComponent } from "./not-found/not-found.component";
import { AboutUsComponent } from './about-us/about-us.component';

const appRoutes: Routes = [
    { path: "", redirectTo: "", pathMatch: "full" },
    //{ path: "**", component: NotFoundComponent }
    { path: "about-us", component: AboutUsComponent}
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