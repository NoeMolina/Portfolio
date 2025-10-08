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
  
  // Agrupar skills por categoría
  get skillsByCategory() {
    return {
      hardskills: this.skills.filter(skill => skill.category === 'hardskills'),
      softskills: this.skills.filter(skill => skill.category === 'softskills'),
      tools: this.skills.filter(skill => skill.category === 'tools')
    };
  }
}
