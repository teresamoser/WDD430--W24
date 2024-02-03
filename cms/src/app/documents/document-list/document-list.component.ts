import { Component, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent {

  @Output() selectedDocumentEvent = new EventEmitter();

  Documents: Document[] = [
    new Document('1', 'Document 1', 'This is Dummy Document 1.', 'https://www.byui.com/1' ),
    new Document('2', 'Document 2', 'This is Dummy Document 2.', 'https://www.byui.com/2' ),
    new Document('3', 'Document 3', 'This is Dummy Document 3.', 'https://www.byui.com/3' ),
    new Document('4', 'Document 4', 'This is Dummy Document 4.', 'https://www.byui.com/4' ),
  ];

  onSelectedDocument(document: Document){
    this.selectedDocumentEvent.emit(document);
  }

}
