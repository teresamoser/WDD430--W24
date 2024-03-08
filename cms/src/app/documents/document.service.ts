import { Subject } from "rxjs";

import { Injectable } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
    providedIn: 'root'
})

export class DocumentService {
    documentListChangedEvent = new Subject<Document[]>();
    documentSelectedEvent = new Subject<Document[]>();
    documentsListClone: any;

    private documents: Document [] = [];
    private maxDocumentId: number;

    constructor() { 
        this.documents = MOCKDOCUMENTS;
        this.maxDocumentId = this.getMaxId();
        }

    getDocuments(): Document[] {
        return this.documents.slice();
        }

    getDocument(id: string): Document {
        return this.documents.find((document) => document.id === id); 
        }

    addDocument(newDocument: Document){
        if (newDocument === null || newDocument === undefined) return;
            this.maxDocumentId++;
            newDocument.id = `${this.maxDocumentId}`;
            this.documents.push(newDocument);
            this.documentListChangedEvent.next(this.documents.slice());
        }

    updateDocument(original: Document, newDocument: Document) {
        if (
            newDocument === null || newDocument === undefined ||
            original === null || original === undefined
        ) {
            return;
            };
        const pos = this.documents.indexOf(original);
        if (pos < 0) return;
            newDocument.id = original.id;
            this.documents[pos] = newDocument;
            this.documentsListClone = this.documents.slice();
            this.documentListChangedEvent.next(this.documentsListClone);
        }

    deleteDocument(document: Document)  {
        if (!document) return;
            const pos = this.documents.indexOf(document);
        if (pos < 0) return;
            this.documents.splice(pos, 1);
            this.documentsListClone = this.documents.slice();
            this.documentListChangedEvent.next(this.documentsListClone);
        } 

    getMaxId(): number {
        let maxId = 0;
        this.documents.forEach((d) => {
            if(+d.id > maxId) maxId = +d.id;
        });
        return maxId;
        }

}
