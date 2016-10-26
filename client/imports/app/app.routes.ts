import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';


import { Home } from './home/home.component';
import { ProjectCreationComponent } from './projectManagement/project-creation.component';

export const routes: Route[] = [
    { path: '', component: Home },
    { path: 'projectCreation', component: ProjectCreationComponent }
];

export const ROUTES_PROVIDERS = [{
    provide: 'canActivateForLoggedIn',
    useValue: () => !! Meteor.userId()
}];