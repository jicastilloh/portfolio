import { Component } from '@angular/core';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { AboutMeSectionComponent } from './components/about-me-section/about-me-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    HomeSectionComponent,
    AboutMeSectionComponent,
    ProjectsSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {}
