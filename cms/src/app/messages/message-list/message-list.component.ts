import { Component, OnInit } from '@angular/core';

import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})

export class MessageListComponent {
  messages: Message [] = [];


constructor(private messageService: MessageService) { }

ngOnInit(): void {
     this.messages = this.messageService.getMessages();
   }

  //add a message to the message list
  onAddMessages(messages: Message) {
    this.messages.push(messages);
  }

}