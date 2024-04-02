import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlantsComponent } from './plants/plants.component';
import { HeaderComponent } from './header/header.component';
import { PlantDetailComponent } from './plants/plant-detail/plant-detail.component';
import { PlantItemComponent } from './plants/plant-item/plant-item.component';
import { PlantListComponent } from './plants/plant-list/plant-list.component';
import { PlantEditComponent } from './plants/plant-edit/plant-edit.component';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantsComponent,
    HeaderComponent,
    PlantDetailComponent,
    PlantItemComponent,
    PlantListComponent,
    PlantEditComponent,
    ScheduleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
