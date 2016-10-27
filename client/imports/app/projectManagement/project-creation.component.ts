import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Projects } from '../../../../both/collections/projects.collection'

import template from './project-creation.component.html';

@Component({
    selector: 'project-creation',
    template
})

export class ProjectCreationComponent implements OnInit {
    toto: string;
    createProjectForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.createProjectForm = this.formBuilder.group({
            name: [''],
            description: [''],
            author: [''],
            gain: [0],
            creationDate: [''],
        });
    }

    submitProject(): void {
        console.log('hello');
        console.log(this.createProjectForm.value);
        Projects.insert(this.createProjectForm.value);
        this.createProjectForm.reset();
    }
}