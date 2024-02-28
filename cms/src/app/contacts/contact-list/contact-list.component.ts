import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Contact } from '../contact.model'
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})

export class ContactListComponent implements OnInit{
  contacts: Contact [] = [];
  contactId: string = '';
  private subscription: Subscription;

  constructor(private contactService: ContactService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
    this.subscription = this.contactService.contactSelectedEvent
    .subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    }

  onNewContact() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
