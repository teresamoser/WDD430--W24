import { Component, OnInit } from '@angular/core';

import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})

export class MessageListComponent implements OnInit{
  messages: Message [] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
      this.messages = this.messageService.getMessages();
      this.messageService.messagesChanged
        .subscribe(
          (messages: Message[]) => {
            this.messages = messages;
          }
        );
    }

  //add a message to the message list
  onAddMessages(messages: Message) {
    this.messages.push(messages);
  }


}