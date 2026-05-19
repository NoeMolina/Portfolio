import { Component } from '@angular/core';

import {
  ExperienceCard,
  Experience
} from './experience-component-card/experience-component-card';

@Component({
  selector: 'app-experience-component',
  standalone: true,
  imports: [ExperienceCard],
  templateUrl: './experience-component.html',
  styleUrls: ['./experience-component.css']
})
export class ExperienceComponent {

  experiences: Experience[] = [
    {
      company: 'Gaman Solutions',
      role: 'Fullstack Developer',
      period: 'Octubre 2025 - Actualidad',
      description: 'Desarrollo de aplicaciones web fullstack utilizando Angular y Express, implementando arquitecturas escalables basadas en Hexagonal Architecture, Clean Architecture y principios SOLID. Participación activa en equipos multidisciplinarios bajo metodologías ágiles como Scrum, colaborando en el análisis, diseño, desarrollo y evolución de soluciones empresariales. Responsable del diseño técnico e implementación de funcionalidades, así como del modelado de procesos y documentación mediante diagramas UML.',
      technologies: ['Angular',
        'TypeScript',
        'Express',
        'Node.js',
        'Hexagonal Architecture',
        'Clean Architecture',
        'SCRUM'],
      logo: 'assets/Icons/Gaman.png',
    },
    {
      company: 'BuxPuntual',
      role: 'Fullstack Developer - Residencias Profesionales',
      period: 'Mayo 2025 - Noviembre 2025',
      description: 'Desarrollo de una API RESTful para la gestión de rutas de transporte empresarial utilizando Node.js, TypeScript y PostgreSQL. Implementación de autenticación JWT, validación de datos y manejo transaccional de errores. Diseño y desarrollo de operaciones CRUD siguiendo principios REST y arquitectura escalable. Integración con PostgreSQL mediante Supabase para la administración y persistencia de datos.',
      technologies: [
        'Node.js',
        'TypeScript',
        'PostgreSQL',
        'Supabase',
        'JWT',
        'REST API'
      ],
      logo: 'assets/Icons/buxpuntual.png',
    },
    {
      company: 'Coppel',
      role: 'Apoyo en Gestión y Reportería de Datos COVID',
      period: 'Junio 2021 - Enero 2023',
      description: 'Análisis, organización y presentación de información relacionada con indicadores y seguimiento de COVID-19, apoyando la elaboración de reportes y visualización de datos para la toma de decisiones, Uso de herramientas como Microsoft Excel, PowerPoint y Google Workspace para la generación de gráficas, reportes y documentación operativa.',
      technologies: ['Microsoft Excel',
        'PowerPoint',
        'Google Workspace'],
      logo: 'assets/Icons/Coppel.png',
    },

    {
      company: 'Coppel',
      role: 'Ejecutivo telefónico',
      period: 'Noviembre 2020 - Junio 2021',
      description: 'Atención y comunicación con clientes mediante campañas telefónicas de promoción y seguimiento, brindando orientación y resolución de dudas de manera clara y efectiva. Desarrollo de habilidades de comunicación, atención al cliente y manejo de interacción en entornos de servicio y soporte.',
      technologies: ['Atención al cliente',
        'Comunicación efectiva',
        'Servicio al cliente'],
      logo: 'assets/Icons/Coppel.png',
    }
  ];
}