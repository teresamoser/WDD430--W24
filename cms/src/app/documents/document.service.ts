import { EventEmitter, Injectable } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
    providedIn: 'root'
})
export class DocumentService {
    documentSelectedEvent = new EventEmitter<Document>();

constructor() { 
    this.documents = MOCKDOCUMENTS;
    }

private documents: Document [] = [];

getDocuments(): Document[] {
    return this.documents.slice();
    }

getDocument(id: string): Document {
    return this.documents.find((document) => document.id === id); 
    }

}
