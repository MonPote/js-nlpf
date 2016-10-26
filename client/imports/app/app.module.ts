import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountsModule } from 'angular2-meteor-accounts-ui';


import {AppComponent} from "./app.component";
import { PARTIES_DECLARATIONS } from './parties';
import { routes, ROUTES_PROVIDERS } from './app.routes';
import { HOME_DECLARATIONS } from "./home/index";
import { PROJECTMANAGEMENT_DECLARATIONS } from "./projectManagement/index";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        AccountsModule
    ],
    declarations: [
        AppComponent,
        ...PARTIES_DECLARATIONS,
        ...HOME_DECLARATIONS,
        ...PROJECTMANAGEMENT_DECLARATIONS,
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        ...ROUTES_PROVIDERS
    ]

})
export class AppModule {}