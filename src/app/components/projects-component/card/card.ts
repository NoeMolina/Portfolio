import { Component, Input } from '@angular/core';
import { Project } from '../projects.service';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() project!: Project;

  readonly techIcons: Record<string, string> = {
    'Angular': 'devicon-angular-plain colored',
    'TypeScript': 'devicon-typescript-plain colored',
    'React': 'devicon-react-original colored',
    'Node.js': 'devicon-nodejs-plain colored',
    'Express': 'devicon-express-original',
    'Laravel': 'devicon-laravel-plain colored',
    'MySQL': 'devicon-mysql-plain colored',
    'PostgreSQL': 'devicon-postgresql-plain colored',
    'Supabase': 'devicon-supabase-plain colored',
    'Vite': 'devicon-vitejs-plain colored',
    'Tailwind CSS': 'devicon-tailwindcss-plain colored',
    'PhP' : 'devicon-php-plain colored',
    'TanStack Table': '',
  };

  getIcon(tech: string): string {
    return this.techIcons[tech] ?? '';
  }
}