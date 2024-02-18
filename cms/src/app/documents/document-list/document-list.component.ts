import { Component, OnInit} from '@angular/core';

import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'

})
export class DocumentListComponent {
    documents: Document [] = [];
    i: number;

constructor(private documentService: DocumentService,
            private router: Router,
            private route: ActivatedRoute) { }

ngOnInit(): void {
    this.documents = this.documentService.getDocuments(); 
  }

onNewDocument() {
    this.router.navigate(['new'], {relativeTo: this.route});
}

  
}
