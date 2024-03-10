import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrl: './contact-edit.component.css'
  })

export class ContactEditComponent implements OnInit {
  id: string;
  editMode: boolean = false;
  originalContact: Contact;
  contact: Contact;
  groupContacts: Contact[] = [];

  constructor(
       private contactService: ContactService,
       private router: Router,
       private route: ActivatedRoute) {
       }
  
  @ViewChild('f', { static: false }) slForm: NgForm;


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
          let id = params['id'];
          if (id === undefined || id === null){
            this.editMode = false;
            return;
          }
          this.originalContact = this.contactService.getContact(id);
          if (
            this.originalContact === undefined || 
            this.originalContact === null
          ){
            return;
          }
          this.editMode = true;
          this.contact= JSON.parse(JSON.stringify(this.originalContact)); 
        });
      }

  onSubmit(form: NgForm) {
    let value = form.value;
    let newContact = new Contact(
        null,
        value.name,
        value.email,
        value.phone,
        value.imageUrl,
        value.group
        );
      if (this.editMode) {
        this.contactService.updateContact(this.originalContact, newContact);
        }else{
        this.contactService.addContact(newContact);
        }
      this.onCancel();
    }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
    }

}

