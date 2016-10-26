import { Meteor } from 'meteor/meteor';

import { loadParties } from './imports/fixtures/parties';

import { loadProjects } from "./imports/fixtures/projects";

import './imports/publications/parties';


Meteor.startup(() => {
    loadParties();
    loadProjects();
});