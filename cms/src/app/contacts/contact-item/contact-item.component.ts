import { Component, Input, OnInit } from '@angular/core';

import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.css'
})
export class ContactItemComponent implements OnInit {
  @Input() contact: Contact;
  @Input() index: number;

  ngOnInit(): void {
    
  }

}
