import { Projects } from '../../../both/collections/projects.collection';
import { Project } from '../../../both/models/project.model';

export function loadProjects() {
    if (Projects.find().cursor.count() === 0) {
        const projects: Project[] = [{
            name: 'Projet NLPF'
        },{
            name : 'Project dos'
        }];

        projects.forEach((project: Project) => Projects.insert(project));
    }
}