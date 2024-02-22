import { Component, Input, OnInit } from '@angular/core';
import { Document } from '../document.model';

import { DocumentService } from '../document.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-document-item',
  templateUrl: './document-item.component.html',
  styleUrl: './document-item.component.css'
})
export class DocumentItemComponent implements OnInit {
  @Input() document: Document;
  @Input() id: string;

  constructor(private documentService: DocumentService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.document = this.documentService.getDocument(this.id);
      }
    );
  }
}
