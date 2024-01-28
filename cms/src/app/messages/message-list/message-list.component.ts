import { Component, OnInit } from '@angular/core';

import { Message } from '../message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent implements OnInit{
messages: Message[] = [
  //sample list of messages to test this component
  new Message('1', 'message 1', 'This is the first message.', 'Daniel'),
  new Message('2', 'message 2', 'This is the second message.', 'Johnny'),
  new Message('3', 'message 3', 'This is the third message.', 'Carlos'),
  ];

  constructor() { }

  ngOnInit(): void { }

  //add a message to the message list
  onAddMessage(message: Message) {
    this.messages.push(message);
  }

}
