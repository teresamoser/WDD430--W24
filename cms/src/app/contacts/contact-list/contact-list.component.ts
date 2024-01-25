import { Component, EventEmitter, Output } from '@angular/core';
import { Contact } from '../contact.model'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  Contacts: Contact[] = [
    new Contact("1", "R. Kent Jackson","jacksonk@byui.edu","208-496-3771", "../../assets/images/wdd430_document_wk02files/jacksonk.jpg", null),
    new Contact("2", "Rex Barzee", "barzeer@byui.edu", "208-496-3768", "../../assets/images/wdd430_document_wk02files/barzeer.jpg", null)
  ];

  @Output() selectedContactEvent = new EventEmitter<Contact>();

  onSelected(contact: Contact){
    this.selectedContactEvent.emit(contact);
  }
}
