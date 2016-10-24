import {Component} from '@angular/core';

import template from './app.component.html';

import {Parties} from '../../../both/collections/parties.collection';
import {Observable} from 'rxjs/Observable';

import { Party } from '../../../both/models/party.model';

@Component({
    selector: 'app',
    template
})

export class AppComponent {
    parties: Observable<Party[]>;

    constructor() {
        this.parties = Parties.find({}).zone();
    }
}