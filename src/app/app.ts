import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './components/about-component/about-component';
import { FooterComponent } from './components/footer-component/footer-component';
import { HomeComponent } from './components/home-component/home-component';
import { NavbarComponent } from './components/navbar-component/navbar-component';
import { ProjectsComponent } from './components/projects-component/projects-component';
import { SkillsComponent } from './components/skills-component/skills-component';

@Component({
  selector: 'app-root',
  imports: [AboutComponent, FooterComponent, HomeComponent, NavbarComponent, ProjectsComponent, SkillsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
