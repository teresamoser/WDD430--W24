import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  //navigation toggles
  isUserDropdownOpen: boolean = false;
  isNavbarCollapsed: boolean = true;

  toggleUserDropdown(){
    this.isUserDropdownOpen = !this.isUserDropdownOpen;
  }
  
  toggleNavbar(){
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

}
