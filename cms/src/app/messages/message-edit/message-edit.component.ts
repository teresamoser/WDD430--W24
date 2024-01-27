import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { Message } from '../message.model';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrl: './message-edit.component.css'
})

export class MessageEditComponent implements OnInit{
  //custom EventEmitter to output the new Message object up to the MessageListComponent
  @Output() addMessageEvent = new EventEmitter<Message>();

  //We need the values entered in the subject and msgText input elements from the Document Object Model (DOM).
  //Use the @ViewChild property decorator to create an ElementRef for the subject and msgText input elements in the DOM
  @ViewChild('subject') subject: ElementRef;
  @ViewChild('msgText') msgText: ElementRef;

  //Create a string variable named currentSender and initialize it with the value of your name.
  currentSender: string = 'Sister Teresa Moser';

  constructor() { }

  ngOnInit(): void { }

  onSendMessage() {
    //Get the value stored in the subject
    const subject = this.subject.nativeElement.value;
    //Get the value stored in the msgText
    const msgText = this.msgText.nativeElement.value;
    //Assign a hardcoded number to the id property of the new Message object
    const message = new Message('1', subject, msgText, this.currentSender);
    //call the addMessageEvent Emitter's emit() method and pass it the new Message
    this.addMessageEvent.emit(message);
    }
}
