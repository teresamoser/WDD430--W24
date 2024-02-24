import { EventEmitter, Injectable } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';

@Injectable ({
    providedIn: 'root'
})

export class ContactService {

contactSelectedEvent = new EventEmitter<Contact[]>();

    
constructor() {
    this.contacts = MOCKCONTACTS;
    }

private contacts: Contact [] = [];

getContacts(): Contact[] {
    return this.contacts.slice();
    }

getContact(id: string): Contact {
   return this.contacts.find((contact) => contact.id === id);
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
    this.contactSelectedEvent.emit(this.contacts.slice());
    }   
}