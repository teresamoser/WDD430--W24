import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrl: './message-edit.component.css'
})

export class MessageEditComponent implements OnInit{
  @ViewChild('subject') subject: ElementRef;
  @ViewChild('msgText') msgText: ElementRef;

  currentSender: string = 'Sister Teresa Moser';

  constructor(private messageService: MessageService) { }

  ngOnInit() { 

  }

  onSendMessage() {
    const subject = this.subject.nativeElement.value;
    const msgText = this.msgText.nativeElement.value;
    const newMessage = new Message('1', subject, msgText, this.currentSender);
    //this.messageService.addMessages(newMessage);
    }

  onClear(){
    this.subject.nativeElement.value = '';
    this.msgText.nativeElement.value = '';
    }
}
