import { Projects } from '../../../both/collections/projects.collection';
import { Project } from '../../../both/models/project.model';

export function loadProjects() {
    if (Projects.find().cursor.count() === 0) {
        const projects: Project[] = [{
            name: 'Projet NLPF',
            author: 'toto',
            gain: 120,
            description: "Description",
            creationDate: '12-12-2016',
            compensation: [{
                title: 'ttest',
                toto: 'trus',
            }]
        },{
            name : 'Project dos',
            author: 'tata',
            gain: 120000,
            description: "Description2",
            creationDate: '01-01-2016',
            compensation: [{
                title: 'ttest',
                toto: 'trus',
            }, {
                title: 'fdgfdjkgh',
                toto: 'fjdkfjd',
            }]
        }];

        projects.forEach((project: Project) => Projects.insert(project));
    }
}