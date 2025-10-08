export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'hardskills' | 'softskills' | 'tools';
  icon?: string; // Font Awesome class
}

export const skills: Skill[] = [
  // Hard Skills (Técnicas)
  { name: 'Angular', level: 85, category: 'hardskills', icon: 'fab fa-angular' },
  { name: 'React', level: 80, category: 'hardskills', icon: 'fab fa-react' },
  { name: 'TypeScript', level: 75, category: 'hardskills', icon: 'fab fa-js-square' },
  { name: 'JavaScript', level: 80, category: 'hardskills', icon: 'fab fa-js-square' },
  { name: 'HTML5', level: 90, category: 'hardskills', icon: 'fab fa-html5' },
  { name: 'CSS3', level: 85, category: 'hardskills', icon: 'fab fa-css3-alt' },
  { name: 'Node.js', level: 75, category: 'hardskills', icon: 'fab fa-node-js' },
  { name: 'Express.js', level: 75, category: 'hardskills', icon: 'fas fa-server' },
  { name: 'Java', level: 80, category: 'hardskills', icon: 'fab fa-java' },
  { name: 'PHP', level: 70, category: 'hardskills', icon: 'fab fa-php' },
  { name: 'Laravel', level: 68, category: 'hardskills', icon: 'fab fa-laravel' },
  { name: 'MySQL', level: 80, category: 'hardskills', icon: 'fas fa-database' },
  { name: 'PostgreSQL', level: 70, category: 'hardskills', icon: 'fas fa-database' },
  
  // Soft Skills
  { name: 'Trabajo en Equipo', level: 90, category: 'softskills', icon: 'fas fa-users' },
  { name: 'Comunicación', level: 85, category: 'softskills', icon: 'fas fa-comments' },
  { name: 'Resolución de Problemas', level: 88, category: 'softskills', icon: 'fas fa-lightbulb' },
  { name: 'Liderazgo', level: 75, category: 'softskills', icon: 'fas fa-crown' },
  { name: 'Adaptabilidad', level: 90, category: 'softskills', icon: 'fas fa-sync-alt' },
  { name: 'Pensamiento Crítico', level: 85, category: 'softskills', icon: 'fas fa-brain' },
  { name: 'Gestión del Tiempo', level: 80, category: 'softskills', icon: 'fas fa-clock' },
  
  // Tools (Herramientas)
  { name: 'Git', level: 85, category: 'tools', icon: 'fab fa-git-alt' },
  { name: 'VS Code', level: 90, category: 'tools', icon: 'fas fa-code' },
  { name: 'Insomnia', level: 80, category: 'tools', icon: 'fas fa-satellite-dish' },
  { name: 'Jira', level: 75, category: 'tools', icon: 'fab fa-atlassian' },
  { name: 'GitHub', level: 85, category: 'tools', icon: 'fab fa-github' },
];