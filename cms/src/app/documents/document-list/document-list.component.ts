import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'

})
export class DocumentListComponent implements OnInit {
    documents: Document[] = [];
    documentId: string = '';
    private subscription: Subscription;

  constructor(private documentService: DocumentService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.documents = this.documentService.getDocuments();
    this.subscription = this.documentService.documentListChangedEvent
      .subscribe(
        (documents: Document[]) => {
          this.documents = documents;
        }
      );
    
    }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    }
  
  onNewDocument() {
      this.router.navigate(['new'], {relativeTo: this.route});
  }

 
}
