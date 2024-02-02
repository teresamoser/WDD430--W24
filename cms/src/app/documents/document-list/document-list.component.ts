import { Component, Output, EventEmitter } from '@angular/core';

import { Document } from '../document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent {
  @Output() selectedDocumentEvent = new EventEmitter();

  documents = [
    new Document('1', 'DummyDocument 1', 'This is Dummy Document 1.', 'https://www.byui.com/1' ),
    new Document('2', 'DummyDocument 2', 'This is Dummy Document 2.', 'https://www.byui.com/2' ),
    new Document('3', 'DummyDocument 3', 'This is Dummy Document 3.', 'https://www.byui.com/3' ),
    new Document('4', 'DummyDocument 4', 'This is Dummy Document 4.', 'https://www.byui.com/4' )
  ];

  onSelected(document: Document){
    this.selectedDocumentEvent.emit(document);
  }

}
