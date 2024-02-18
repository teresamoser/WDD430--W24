import { RouterModule, Routes } from "@angular/router";

import { DocumentsComponent } from "./documents/documents.component";
import { MessageListComponent } from "./messages/message-list/message-list.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { NgModule } from "@angular/core";

const appRoutes: Routes = [
    { path: '', redirectTo: '/documents', pathMatch: 'full' },
    { path: 'docuemnts', component: DocumentsComponent },
    { path: 'messages', component: MessageListComponent },
    { path: 'contacts', component: ContactsComponent },
    ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    })

export class AppRoutingModules{}



