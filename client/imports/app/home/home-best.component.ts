import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import template from './home-best.component.html';
import { MeteorObservable } from 'meteor-rxjs';
import { Subscription } from 'rxjs/Subscription';

import { Project } from "../../../../both/models/project.model";
import { Projects } from '../../../../both/collections/projects.collection';

import style from './home.component.scss';

@Component({
    selector: 'home-best',
    template,
    styles: [ style ]
})

export class HomeBest implements OnInit, OnDestroy {
    projects: Observable<Project[]>;
    projectsub: Subscription;

    ngOnInit() {
        this.projects = Projects.find({}).zone();

        this.projectsub = MeteorObservable.subscribe('getAllProject').subscribe();
    }

    ngOnDestroy() {
        this.projectsub.unsubscribe();
    }
}