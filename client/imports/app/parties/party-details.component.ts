import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Meteor } from 'meteor/meteor';

import 'rxjs/add/operator/map';

import template from './party-details.component.html';
import { Parties } from '../../../../both/collections/parties.collection';
import { Party } from '../../../../both/models/party.model';

@Component({
    selector: 'party-details',
    template
})
export class PartyDetailsComponent implements OnInit, OnDestroy {
    partyId: string;
    paramsSub: Subscription;
    party: Party;

    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.paramsSub = this.route.params
            .map(params => params['partyId'])
            .subscribe(partyId => {
                this.partyId = partyId;

                this.party = Parties.findOne(this.partyId);
            });
    }

    ngOnDestroy() {
        this.paramsSub.unsubscribe();
    }

    saveParty() {
        if (!Meteor.userId()) {
            alert('Please log in to change this party');
            return;
        }
        Parties.update(this.party._id, {
            $set: {
                name: this.party.name,
                description: this.party.description,
                location: this.party.location
            }
        });
    }
}