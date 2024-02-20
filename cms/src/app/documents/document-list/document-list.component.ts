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
    documents: Document [] = [];
    i: number;

constructor(private documentService: DocumentService,
            private router: Router,
            private route: ActivatedRoute) { }

ngOnInit() {
    this.documents = this.documentService.getDocuments();
    this.documentService.documentSelectedEvent
      .subscribe (
        (documents: Document[]) => {
          this.documents = documents;
        }
      )
  }

onNewDocument() {
    this.router.navigate(['new'], {relativeTo: this.route});
}

  
}
