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
            compensations: [{
                title: 'ttest',
                value: 23,
                description: 'fdsfsdfds',
            }]
        }, {
            name : 'Project dos',
            author: 'tata',
            gain: 1200,
            description: "Description2",
            creationDate: '01-01-2016',
            compensations: [{
                title: 'ttest',
                value: 23,
                description: '',
            }, {
                title: 'ttest',
                value: 243,
                description: 'fdfsgahjdjsahdjsahdksahjkd',
            }]
        }, {
            name: 'Beryllium',
            author: 'Group',
            gain: 1200,
            description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie',
            creationDate: '01-01-2016',
            compensations: [{
                title: 'ttest',
                value: 23,
                description: 'Compensation 1',
            }, {
                title: 'ttest',
                value: 123,
                description: 'Compensation 2',
            }, {
                title: 'ttest',
                value: 456,
                description: 'Compensation 3',
            }, {
                title: 'ttest',
                value: 789,
                description: 'Compensation 4',
            }, {
                title: 'ttest',
                value: 987,
                description: 'Compensation 5',
            }],
        }];

        projects.forEach((project: Project) => Projects.insert(project));
    }
}