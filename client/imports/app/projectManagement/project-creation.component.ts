import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Projects } from '../../../../both/collections/projects.collection'
import { Observable } from 'rxjs/Observable';

import template from './project-creation.component.html';
import {InjectUser} from "angular2-meteor-accounts-ui";

@Component({
    selector: 'project-creation',
    template
})

@InjectUser('user')
export class ProjectCreationComponent implements OnInit {
    createProjectForm: FormGroup;
    compensationsForm: FormGroup;
    compensationFormList: Observable<Object[]>;
    user: Meteor.User;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.createProjectForm = this.formBuilder.group({
            name: [''],
            description: [''],
            author: [''],
            gain: [0],
            creationDate: [''],
        });

        this.compensationsForm = this.formBuilder.group({
            title: [''],
            value: [''],
            description: ['']
        });

        this.compensationFormList = [];
    }

    addCompensation(): void {
        this.compensationFormList.push(this.compensationsForm.value);
        console.log(this.compensationFormList);
        this.compensationsForm.reset();
    }

    modifyCompensation(compensation): void {
        this.compensationsForm.patchValue({title : compensation.title});
        this.compensationsForm.patchValue({value : compensation.value});
        this.compensationsForm.patchValue({description : compensation.description});
        const index = this.compensationFormList.indexOf(compensation);
        this.compensationFormList.splice(index, 1);
    }

    deleteCompensation(compensation): void {
        const index = this.compensationFormList.indexOf(compensation);
        this.compensationFormList.splice(index, 1);
    }

    submitProject(): void {
        const comp = {
            compensations: this.compensationFormList
        };

        Projects.insert(this.createProjectForm.value);
        Projects.insert(Object.assign({}, this.createProjectForm.value, comp));

        this.compensationFormList = [];
        this.compensationsForm.reset();
        this.createProjectForm.reset();
    }
}