import { Projects } from '../../../both/collections/projects.collection';
import { Project } from '../../../both/models/project.model';

export function loadProjects() {
    if (Projects.find().cursor.count() === 0) {
        const projects: Project[] = [{
            name: 'Projet NLPF',
            gain: 120,
            creationDate: '12-12-2016',
            description: "Description"
        },{
            name : 'Project dos',
            gain: 120000,
            creationDate: '01-01-2016',
            description: "Description2"
        }];

        projects.forEach((project: Project) => Projects.insert(project));
    }
}