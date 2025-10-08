import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme';
@Component({
  selector: 'app-navbar-component',
  imports: [],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css'
})
export class NavbarComponent {

  constructor(public themeService: ThemeService){}

  toggleTheme(): void{
    this.themeService.toggleTheme();
  }
}
