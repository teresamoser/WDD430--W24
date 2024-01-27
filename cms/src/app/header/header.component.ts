import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  //navigation toggles
  isUserDropdownOpen: boolean = false;
  isNavbarCollapsed: boolean = true;

  toggleUserDropdown(){
    this.isUserDropdownOpen = !this.isUserDropdownOpen;
  }
  
  toggleNavbar(){
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
  //navigation toggles end

  //selected tab feature
  //create a new event emitter
  @Output() selectedFeatureEvent = new EventEmitter<string>();

  //create method responsible for emitting or firing the selectedFeatureEvent
  onSelected(selectedEvent: string) {
    this.selectedFeatureEvent.emit(selectedEvent);
  }

}
