import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { ProjectInfo } from './interfaces/project.interface';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-projects-section',
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.css',
})
export class ProjectsSectionComponent {
  projects = signal<ProjectInfo[] | null>(null);
  selectedProject: any = null; // Proyecto seleccionado

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<ProjectInfo[]>('assets/projects.json').subscribe((data) => {
      this.projects.set(data);
    });
  }

  openModal(project: any): void {
    this.selectedProject = project;
    const modal: any = document.getElementById('modal_description');
    modal?.showModal();
  }

  closeModal(): void {
    const modal: any = document.getElementById('modal_description');
    modal?.close();
  }
}
