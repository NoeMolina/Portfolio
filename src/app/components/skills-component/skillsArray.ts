export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'database' | 'architecture' | 'tools' | 'softskills';
  icon?: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: 'Angular', level: 92, category: 'frontend', icon: 'fab fa-angular' },
  { name: 'TypeScript', level: 90, category: 'frontend', icon: 'fab fa-js-square' },
  { name: 'JavaScript', level: 86, category: 'frontend', icon: 'fab fa-js-square' },
  { name: 'HTML5', level: 92, category: 'frontend', icon: 'fab fa-html5' },
  { name: 'CSS3', level: 88, category: 'frontend', icon: 'fab fa-css3-alt' },
  { name: 'TanStack Query', level: 78, category: 'frontend', icon: 'fas fa-bolt' },

  // Backend
  { name: 'Node.js', level: 88, category: 'backend', icon: 'fab fa-node-js' },
  { name: 'Express.js', level: 84, category: 'backend', icon: 'fas fa-server' },
  { name: 'Java', level: 76, category: 'backend', icon: 'fab fa-java' },
  { name: 'REST API', level: 88, category: 'backend', icon: 'fas fa-network-wired' },
  { name: 'JWT', level: 82, category: 'backend', icon: 'fas fa-key' },

  // Bases de Datos
  { name: 'PostgreSQL', level: 84, category: 'database', icon: 'fas fa-database' },
  { name: 'MySQL', level: 78, category: 'database', icon: 'fas fa-database' },
  { name: 'Supabase', level: 80, category: 'database', icon: 'fas fa-cloud' },

  // Arquitectura
  { name: 'SOLID', level: 86, category: 'architecture', icon: 'fas fa-cubes' },
  { name: 'Clean Architecture', level: 82, category: 'architecture', icon: 'fas fa-layer-group' },
  { name: 'Hexagonal Architecture', level: 80, category: 'architecture', icon: 'fas fa-draw-polygon' },

  // Herramientas
  { name: 'Git', level: 92, category: 'tools', icon: 'fab fa-git-alt' },
  { name: 'GitHub', level: 90, category: 'tools', icon: 'fab fa-github' },
  { name: 'Docker', level: 76, category: 'tools', icon: 'fab fa-docker' },
  { name: 'Linux', level: 82, category: 'tools', icon: 'fab fa-linux' },
  { name: 'Postman', level: 86, category: 'tools', icon: 'fas fa-paper-plane' },
  { name: 'Jira', level: 78, category: 'tools', icon: 'fab fa-atlassian' },

  // Soft Skills
  { name: 'Trabajo en Equipo', level: 92, category: 'softskills', icon: 'fas fa-users' },
  { name: 'Comunicación', level: 88, category: 'softskills', icon: 'fas fa-comments' },
  { name: 'Resolución de Problemas', level: 90, category: 'softskills', icon: 'fas fa-lightbulb' },
  { name: 'Adaptabilidad', level: 87, category: 'softskills', icon: 'fas fa-sync-alt' },
];