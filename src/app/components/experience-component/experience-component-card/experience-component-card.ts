import { Component, Input } from '@angular/core';

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  logo?: string;
}

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [],
  templateUrl: './experience-component-card.html',
  styleUrl: './experience-component-card.css'
})
export class ExperienceCard {
  @Input() experience!: Experience;

  readonly techIcons: Record<string, string> = {
    'Angular': 'devicon-angular-plain colored',
    'TypeScript': 'devicon-typescript-plain colored',
    'Express': 'devicon-express-original',
    'Node.js': 'devicon-nodejs-plain colored',
    'MongoDB': 'devicon-mongodb-plain colored',
    'NestJS': 'devicon-nestjs-plain colored',
    'SCRUM': 'devicon-jira-plain colored',
    'Hexagonal Architecture': '',
    'Clean Architecture': '',
  };

  getIcon(tech: string): string {
    return this.techIcons[tech] ?? '';
  }
}