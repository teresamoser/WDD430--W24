import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrl: './document-edit.component.css'
})

export class DocumentEditComponent implements OnInit {
  id: string;
  editMode: boolean = false;
  originalDocument:  Document;
  document: Document;

  constructor(private documentService: DocumentService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
          let id = params['id'];
          if (id === undefined || id === null){
            this.editMode = false;
            return;
          }
          this.originalDocument = this.documentService.getDocument(id);
          if (
            this.originalDocument === undefined || 
            this.originalDocument === null
          ){
            return;
          }
          this.editMode = true;
          this.document = JSON.parse(JSON.stringify(this.originalDocument)); 
        });
      }

  onSubmit(form: NgForm) {
    let value = form.value;
    let newDocument = new Document(
        null,
        value.name,
        value.description,
        value.url,
        value.children
        );
      if (this.editMode) {
        this.documentService.updateDocument(this.originalDocument, newDocument);
        }else{
        this.documentService.addDocument(newDocument);
        }
      this.onCancel();
    }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
