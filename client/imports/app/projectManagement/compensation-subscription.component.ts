import {Component, OnInit} from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import { Projects } from '../../../../both/collections/projects.collection';
import {Project} from "../../../../both/models/project.model";
import {ObservableCursor} from "meteor-rxjs";

import template from './project-display.component.html';

@Component({
    selector: 'project-display',
    template
})

export class CompensationSubComponent implements OnInit  {
    projectId: string;
    project: Project;

    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.params
            .map(params => params['projectId'])
            .subscribe(projectId => {
                    this.projectId = projectId;
                    // this.project = Projects.findOne(this.projectId);
                }
            );
    }
}