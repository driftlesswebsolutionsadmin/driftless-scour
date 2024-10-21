import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  menuActive = false;

  closeMenu() {
    this.menuActive = false;
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    if (!targetElement.closest('.navbar')) {
      this.closeMenu();
    }
  }

  onLinkClick() {
    this.closeMenu();
  }
}
