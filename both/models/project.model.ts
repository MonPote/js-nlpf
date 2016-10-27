import { CollectionObject } from './collection-object.model';

export interface Project extends CollectionObject {
    name: string;
    description: string;
    author: string;
    gain: number;
    creationDate: string;
    compensation: [{
        title: string;
        toto: string;
    }];
}