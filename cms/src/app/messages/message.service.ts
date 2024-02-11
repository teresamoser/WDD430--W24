import { EventEmitter, Injectable } from '@angular/core';
import { Message } from './message.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

    messagesChanged = new EventEmitter<Message[]>();

constructor() { 
    this.messages = MOCKMESSAGES;
    }

private messages: Message [] = [];

getMessages(): Message[] {
    return this.messages.slice();
    }
    
getMessage(id: string): Message {
    return this.messages.find((message) => message.id === id);
    }

addMessages(messages: Message[]){
    this.messages.push(...messages);
    this.messagesChanged.emit(this.messages.slice());

  }

}
