import { Component, OnInit} from '@angular/core';

import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'

})
export class DocumentListComponent implements OnInit {
    documents: Document[] = [];
    documentId: string = '';

  constructor(private documentService: DocumentService,
              private route: ActivatedRoute,
              private router: Router) {
    this.documents = this.documentService.getDocuments();
   }

  ngOnInit() {
    
    }

  onNewDocument() {
      this.router.navigate(['new'], {relativeTo: this.route});
  }

  
}
