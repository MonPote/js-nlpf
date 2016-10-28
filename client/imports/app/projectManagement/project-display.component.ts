import { Component } from '@angular/core';
import template from './project-display.component.html';
import {ActivatedRoute} from "@angular/router";
import { Projects } from '../../../../both/collections/projects.collection';
import {Project} from "../../../../both/models/project.model";

@Component({
    selector: 'project-display',
    template
})

export class ProjectDisplayComponent {
    projectId: string;
    //description: string;
    project: Project;

    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.params
            .map(params => params['projectId'])
            .subscribe(projectId => {
                    this.projectId = projectId;
                    this.project = Projects.findOne(this.projectId);
                }
            );
    }
}