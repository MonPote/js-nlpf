import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { Home } from './home/home.component';
import { ProjectCreationComponent } from './projectManagement/project-creation.component';
import { ProjectDisplayComponent } from './projectManagement/project-display.component'
import {CompensationSubComponent} from "./projectManagement/compensation-subscription.component";

export const routes: Route[] = [
    { path: '', component: Home },
    { path: 'projectCreation', component: ProjectCreationComponent },
    { path: 'project/:projectId', component: ProjectDisplayComponent },
    { path: 'project/:projectId/:compensationValue', component: CompensationSubComponent}
];

export const ROUTES_PROVIDERS = [{
    provide: 'canActivateForLoggedIn',
    useValue: () => !! Meteor.userId()
}];