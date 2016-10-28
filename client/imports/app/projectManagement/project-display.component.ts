import { Component } from '@angular/core';
import template from './project-display.component.html';
import {ActivatedRoute} from "@angular/router";
import { Projects } from '../../../../both/collections/projects.collection';
import {Project} from "../../../../both/models/project.model";
import {ObservableCursor} from "meteor-rxjs";

@Component({
    selector: 'project-display',
    template
})

export class ProjectDisplayComponent {
    projectId: string;
    //description: string;
    project: Project;
    compensationFormList: Object[];

    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.params
            .map(params => params['projectId'])
            .subscribe(projectId => {
                    this.projectId = projectId;
                    this.project = Projects.findOne(this.projectId);
                    this.compensationFormList = this.project.compensations;
                }
            );
    }
}