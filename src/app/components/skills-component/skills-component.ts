import { Component } from '@angular/core';
import { skills, Skill } from './skillsArray';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [], // Sin CommonModule para nueva sintaxis
  templateUrl: './skills-component.html',
  styleUrls: ['./skills-component.css']
})
export class SkillsComponent {
  skills = skills;

  get skillsByCategory() {
    return {
      frontend: this.skills.filter((skill) => skill.category === 'frontend'),
      backend: this.skills.filter((skill) => skill.category === 'backend'),
      database: this.skills.filter((skill) => skill.category === 'database'),
      architecture: this.skills.filter((skill) => skill.category === 'architecture'),
      tools: this.skills.filter((skill) => skill.category === 'tools'),
      softskills: this.skills.filter((skill) => skill.category === 'softskills'),
    };
  }
}
