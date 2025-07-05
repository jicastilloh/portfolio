import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectInfo } from '../landing/components/projects-section/interfaces/project.interface';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  imports: [NgFor, NgIf],
})
export class ProjectComponent implements OnInit {
  projects = signal<ProjectInfo[] | null>(null);
  selectedProject: ProjectInfo | null = null;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtén el parámetro "projectId" de la ruta
    const projectId = this.route.snapshot.paramMap.get('projectId');

    // Carga los datos del archivo JSON
    this.http.get<ProjectInfo[]>('assets/projects.json').subscribe((data) => {
      this.projects.set(data);

      // Encuentra el proyecto correspondiente al "projectId"
      this.selectedProject =
        data.find((project) => project.id === projectId) || null;
    });
  }
}
