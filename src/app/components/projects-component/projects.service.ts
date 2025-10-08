export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'MVC CAJERO',
    description:
      'Proyecto escolar donde se realizo aplicación web que simula el funcionamiento de un cajero, aplicando MVC.',
    technologies: ['Laravel'],
    image: 'assets/images/CAJERO.jpg',
    githubUrl: 'https://github.com/NoeMolina/Ingweb-MVC_Laravel_Cajero',
    status: 'completed',
  },
  {
    id: 2,
    title: 'Sistema DHL',
    description:
      'Proyecto escolar donde se realizo aplicación web fullstack para gestionar el envio de paquetes de DHL en la republica.',
    technologies: ['Laravel', 'MySQL'],
    image: 'assets/images/DHL.jpg',
    githubUrl: 'https://github.com/NoeMolina/DHL',
    status: 'completed',
  },
  {
    id: 2,
    title: 'Sistema DHL',
    description:
      'Proyecto escolar donde se realizo aplicación web fullstack para gestionar el envio de paquetes de DHL en la republica.',
    technologies: ['Laravel', 'MySQL'],
    image: 'assets/images/DHL.jpg',
    githubUrl: 'https://github.com/NoeMolina/DHL',
    status: 'completed',
  },
  {
    id: 3,
    title: 'API RESTful de Gestión de Rutas de Transporte',
    description:
      'Proyecto de residencia profesional donde se desarrolló una API con Node.js, TypeScript y PostgreSQL (Supabase) para administrar rutas de transporte empresarial. Implementa autenticación JWT, validación de datos, manejo de errores transaccional y CRUD completo con IDs secuenciales. Diseñada bajo principios REST y arquitectura escalable, ideal para sistemas de logística y gestión de flotas.',
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Supabase'],
    image: 'assets/images/rutas.jpg',
    status: 'completed',
  },
  {
    id: 4,
    title: 'Dashboard Logístico BUXPUNTUAL',
    description:
      'Frontend desarrollado en React + TypeScript + Vite para la plataforma BUXPUNTUAL. Proporciona un panel administrativo con gestión de rutas, unidades y operadores, además de reportes operativos sobre asignaciones y consumo de combustible. Incluye autenticación por token, protección de rutas por rol y exportación de reportes a Excel y PDF. Implementa una interfaz moderna con Tailwind CSS y tablas interactivas mediante TanStack Table.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'TanStack Table'],
    image: 'assets/images/buxpuntual.jpg',
    status: 'completed',
  },
];
