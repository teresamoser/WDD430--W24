import { Component, Output, EventEmitter } from '@angular/core';

import { Document } from '../document.model';
import { DocumentService } from '../document.service';


@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'

})
export class DocumentListComponent {
    documents: Document [] = [];


onSelected(document: Document){
    this.documentService.documentSelectedEvent.emit(document);
    }

constructor(private documentService: DocumentService) { }

ngOnInit(): void {
    this.documents = this.documentService.getDocuments(); 
  }
  
}
