import { HttpClient } from '@angular/common/http';
import { Component, computed, signal } from '@angular/core';
import { ProjectInfo } from './interfaces/project.interface';
import { NgFor, NgIf } from '@angular/common';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects-section',
  imports: [NgFor, NgIf, ScrollRevealDirective],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.css',
})
export class ProjectsSectionComponent {
  projects = signal<ProjectInfo[] | null>(null);
  selectedProject: ProjectInfo | null = null;

  featuredProjects = computed(
    () => this.projects()?.filter((p) => p.featured) ?? []
  );
  secondaryProjects = computed(
    () => this.projects()?.filter((p) => !p.featured) ?? []
  );

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<ProjectInfo[]>('assets/projects.json').subscribe((data) => {
      this.projects.set(data);
    });
  }

  openModal(project: ProjectInfo): void {
    this.selectedProject = project;
    const modal: any = document.getElementById('modal_description');
    modal?.showModal();
  }

  closeModal(): void {
    const modal: any = document.getElementById('modal_description');
    modal?.close();
  }
}
