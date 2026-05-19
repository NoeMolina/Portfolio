import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme';
@Component({
  selector: 'app-navbar-component',
  imports: [],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css'
})
export class NavbarComponent implements OnInit {

  @HostBinding('class.is-scrolled') scrolled = false;

  constructor(public themeService: ThemeService){}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.onWindowScroll();
    }
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (typeof window === 'undefined') return;

    this.scrolled = window.scrollY > 8;
  }

  toggleTheme(): void{
    this.themeService.toggleTheme();
  }
}
