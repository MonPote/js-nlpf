import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Projects } from '../../../../both/collections/projects.collection'
import { Observable } from 'rxjs/Observable';

import template from './project-creation.component.html';

@Component({
    selector: 'project-creation',
    template
})

export class ProjectCreationComponent implements OnInit {
    createProjectForm: FormGroup;
    compensationsForm: FormGroup;
    compensationFormList: Observable<Object[]>;

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
        this.compensationsForm.reset();
    }

    submitProject(): void {
        console.log('hello');
        let comp = {
            compensations: this.compensationFormList
        }

        // console.log(Object.assign({}, this.createProjectForm.value, comp));
        Projects.insert(Object.assign({}, this.createProjectForm.value, comp));
        
        this.compensationFormList = [];
        this.compensationsForm.reset();
        this.createProjectForm.reset();
    }
}