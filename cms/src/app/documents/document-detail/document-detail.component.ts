import { Component, OnInit} from '@angular/core';
import { Document } from '../document.model';

import { DocumentService } from '../document.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { WinRefService } from '../../win-ref.service';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrl: './document-detail.component.css'
  })

export class DocumentDetailComponent implements OnInit {
  document: Document;
  nativeWindow: any;
  id: string;

  constructor(private documentService: DocumentService,
              private WindowRefService: WinRefService,
              private route: ActivatedRoute,
              private router: Router) { 
    this.nativeWindow = WindowRefService.getNativeWindow();
              }


  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.document = this.documentService.getDocument(this.id);
        }
      );
    }

  onEditDocument(){
    this.router.navigate(['edit'], {relativeTo: this.route}); 
  }

  onViewDocument() {
    if (this.document.url) {
      this.nativeWindow.open(this.document.url);
    }
  }

  onDeleteDocument() {
    this.documentService.deleteDocument(this.document);
    this.router.navigate(['/document.url']), {relativeTo: this.route}
 }

}
