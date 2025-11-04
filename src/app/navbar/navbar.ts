import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
})
export class Navbar {
  opacity = 1;
  private readonly fadeDistancePx = 200;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollY = window.scrollY || 0;
    const nextOpacity = Math.max(0, 1 - scrollY / this.fadeDistancePx);
    if (nextOpacity !== this.opacity) {
      this.opacity = nextOpacity;
    }
  }
}
