import {Component, OnInit, OnDestroy} from '@angular/core';
import template from './project-display.component.html';
import {ActivatedRoute} from "@angular/router";
import { Projects } from '../../../../both/collections/projects.collection';
import {Project} from "../../../../both/models/project.model";
import {ObservableCursor} from "meteor-rxjs";
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'project-display',
    template
})

export class ProjectDisplayComponent implements OnInit, OnDestroy {
    projectId: string;
    //description: string;
    project: Project;
    compensationFormList: Object[];
    paramsSub: Subscription;
    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.paramsSub = this.route.params
            .map(params => params['projectId'])
            .subscribe(projectId => {
                    this.projectId = projectId;
                    this.project = Projects.findOne(this.projectId);
                    this.compensationFormList = this.project.compensations;
                console.log(this.project);
                }
            );
    }

    ngOnDestroy() {
        this.paramsSub.unsubscribe();
    }
}