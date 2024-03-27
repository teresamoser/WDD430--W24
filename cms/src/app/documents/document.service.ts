import { Subject } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Document } from './document.model';
// import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
    providedIn: 'root'
    })

export class DocumentService {
    documentListChangedEvent = new Subject<Document[]>();
    documentSelectedEvent = new Subject<Document[]>();
    documentsListClone: any; 

    private documents: Document [] = [];
    private maxDocumentId: number;
    
    constructor(private http: HttpClient) { 
        // this.documents = MOCKDOCUMENTS;
        this.maxDocumentId = this.getMaxId();
        }

    getDocuments(){
        const url = 'https://api.jsonbin.io/v3/b/65ff47a26279eb0e060211b8';
        const headers = new HttpHeaders ({
            'X-Master-Key': '$2a$10$OGbdyCPIeJ61YoZaV4da8.KL.p1oGDiL6RWgqjvgrrk4lgHAygLk.',
            'X-Access-Key': '$2a$10$uJB1.LN3iaEHYGyryXqk..kk23CdGDghXS83t0ZjZUbzDcWb73izC',
            });
            // console.log(this.documents);
        this.http
                .get(url, {headers})
                .subscribe({
                // success method
                next: (documents: Document[]) => {
                this.documents = documents
                this.maxDocumentId = this.getMaxId()
                this.documents.sort((a, b) => {
                    const nameA = a.name.toUpperCase();
                    const nameB = b.name.toUpperCase();
                        if (nameA < nameB){
                            return -1;
                            }
                        if (nameA > nameB){
                            return 1;
                            }
                        return 0;
                        });
                let documentsListClone = this.documents.slice();
                this.documentListChangedEvent.next(documentsListClone);
                    },
                //error method
                error: (error) => 
                    console.log(error)
                 });
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
    
    // storeDocuments()

}
