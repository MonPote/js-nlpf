import { Component } from '@angular/core';
import template from './project-display.component.html';
import {ActivatedRoute} from "@angular/router";
import { Projects } from '../../../../both/collections/projects.collection';

@Component({
    selector: 'project-display',
    template
})

export class ProjectDisplayComponent {
    projectId: string;
    description: string;

    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.params
            .map(params => params['projectId'])
            .subscribe(projectId => {
                    this.projectId = projectId;
                    this.description = Projects.findOne(this.projectId).description;
                }
            );
    }
}