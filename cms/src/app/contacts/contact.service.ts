import { Subject } from "rxjs";

import { Injectable } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';

@Injectable ({
    providedIn: 'root'
})

export class ContactService {
    contactListChangedEvent = new Subject<Contact[]>();
    contactSelectedEvent = new Subject<Contact[]>();
    contactsListClone: Contact[];


    private contacts: Contact [] = [];
    private maxContactId: number;
    
    constructor() {
        this.contacts = MOCKCONTACTS;
        this.maxContactId = this.getMaxId();
        }

    getContacts(): Contact[] {
        return this.contacts.slice();
        }

    getContact(id: string): Contact {
    return this.contacts.find((contact) => contact.id === id);
        }

    addContact(newContact: Contact){
        if (newContact === null || newContact === undefined) return;
            this.maxContactId++;
            newContact.id = `${this.maxContactId}`;
            this.contacts.push(newContact);
            this.contactListChangedEvent.next(this.contacts.slice());
        }

    updateContact(original: Contact, newContact: Contact) {
        if (
            newContact === null || newContact === undefined ||
            original === null || original === undefined
            ) {
            return;
            };
        const pos = this.contacts.indexOf(original);
        if (pos < 0) return;   
            newContact.id = original.id;
            this.contacts[pos] = newContact;
            this.contactsListClone = this.contacts.slice();
            this.contactListChangedEvent.next(this.contactsListClone);
        }

    deleteContact(contact: Contact)  {
        if (!contact) {
            return;
            }
        const pos = this.contacts.indexOf(contact);
        if (pos < 0) {
            return;
            }
        this.contacts.splice(pos, 1);
        this.contactSelectedEvent.next(this.contacts.slice());
        } 
        
    getMaxId(): number {
        let maxId = 0;
        this.contacts.forEach((d) => {
            if(+d.id > maxId) maxId = +d.id;
        });
        return maxId;
        }
        
}