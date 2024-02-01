import { Component, Output, EventEmitter } from '@angular/core';

import { Document } from '../document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent {
  Documents: Document[] = [
    new Document(id, name, description, url ),
    new Document(id, name, description, url ),
    new Document(id, name, description, url ),
    new Document(id, name, description, url ),
    new Document(id, name, description, url )
  ];

  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  onSelected(document: Document){
    this.selectedDocumentEvent.emit(document);
  }

}
