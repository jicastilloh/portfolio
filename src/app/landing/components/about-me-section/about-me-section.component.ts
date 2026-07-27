import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

interface Skill {
  name: string;
  icon?: string;
}

interface SkillCategory {
  label: string;
  skills: Skill[];
}

@Component({
  selector: 'app-about-me-section',
  imports: [NgFor, NgIf, ScrollRevealDirective],
  templateUrl: './about-me-section.component.html',
})
export class AboutMeSectionComponent {
  softSkills: string[] = [
    'Autodidacta',
    'Trabajo en equipo',
    'Manejo de estrés',
    'Comunicación efectiva',
  ];

  skillCategories: SkillCategory[] = [
    {
      label: 'Backend Development',
      skills: [
        { name: 'NestJS', icon: 'assets/devicon--nestjs.svg' },
        { name: 'Node.js', icon: 'assets/devicon--nodejs-wordmark.svg' },
        { name: 'TypeScript', icon: 'assets/skill-icons--typescript.svg' },
        { name: 'FastAPI' },
        { name: 'Python', icon: 'assets/material-icon-theme--python.svg' },
        { name: 'API RESTful' },
      ],
    },
    {
      label: 'Cloud & DevOps',
      skills: [
        { name: 'Terraform' },
        { name: 'Docker', icon: 'assets/material-icon-theme--docker.svg' },
        { name: 'Serverless Architecture' },
        { name: 'Azure' },
        { name: 'Docker Compose' },
      ],
    },
    {
      label: 'Bases de Datos',
      skills: [
        { name: 'PostgreSQL', icon: 'assets/devicon--postgresql.svg' },
        { name: 'SQL' },
        { name: 'MongoDB' },
      ],
    },
    {
      label: 'Frontend & Otros',
      skills: [
        { name: 'Angular', icon: 'assets/devicon--angular.svg' },
        { name: 'HTML', icon: 'assets/logos--html-5.svg' },
        { name: 'CSS', icon: 'assets/logos--css-3.svg' },
        { name: 'Power BI', icon: 'assets/logos--microsoft-power-bi.svg' },
        {
          name: 'Excel Power Pivot',
          icon: 'assets/vscode-icons--file-type-excel.svg',
        },
      ],
    },
  ];
}
