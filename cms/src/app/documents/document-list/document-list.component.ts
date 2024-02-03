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
    new Document('1', 'CIT 260 Programming with Classes', 
        'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.', 
        'https://www.byui.com/1' ),
    new Document('2', 'CIT 366 Full Web Stack Developement', 
        'This course will teach you how to design and build interactive web based applications using HTML, CSS, JavaScript, and a web development stack.', 
        'https://www.byui.com/2' ),
    new Document('3', 'CIT 425 Data Warehousing', 
        ' learn how to build software to meet rigid specifications, how to optimize algorithmic performance, and how to more effectively utilize data structures in real-world applications.', 
        'https://www.byui.com/3' ),
    new Document('4', 'CIT 460 Web Services', 
        'This course focuses on the backend development of dynamic, service-oriented web applications. Students will learn how to design and implement web services, how to interact with data storage, and how to use these tools to build functioning web applications', 
        'https://www.byui.com/4' ),
    new Document('4', 'CIT 495 Senior Practicum', 
        'Write a senior project proposal outlining a professional-level experience.', 
        'https://www.byui.com/4' ),
  ];

  onSelectedDocument(document: Document){
    this.selectedDocumentEvent.emit(document);
  }

}
