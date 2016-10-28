import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import template from './compensation-subscription.component.html';
import {Project} from "../../../../both/models/project.model";
import {Projects} from "../../../../both/collections/projects.collection";

@Component({
    selector: 'compensation-sub',
    template
})

export class CompensationSubComponent {
    compensations: Object;
    compensationDisplay: Object;
    projectId = Object;
    compensationValue = Object;
    curProj : Project;
    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params
            .map(params => params['projectId'])
            .subscribe((projectId) => {
                this.projectId = projectId;
                this.curProj = Projects.findOne(this.projectId);
                    // this.compensations = Projects.findOne(projectId);
                    console.log('project id = ', this.curProj);
                }
            );
        this.route.params
            .map(params => params['compensationValue'])
            .subscribe((compensationValue) => {
                    this.compensationValue = compensationValue;
                    // this.compensations = Projects.findOne(projectId);
                    // console.log('compenValue ', this.compensationValue);
                }
            );

        // console.log('this time = ', this.projectId, this.compensationValue);
        // console.log('proj id =', this.projectId);
        // let proj = Projects.findOne(this.projectId);
        // console.log('proj = ', proj);
        // let comps = proj.compensations;
        // let selectedcomp;
        // comps.forEach(function (obj) {
        //     if (obj.value === this.compensationValue)
        //         selectedcomp = obj;
        // })
        // console.log('selected = ', selectedcomp);

    }
}