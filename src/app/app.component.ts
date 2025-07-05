import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeSectionComponent } from './landing/components/home-section/home-section.component';
import { AboutMeSectionComponent } from './landing/components/about-me-section/about-me-section.component';
import { ProjectsSectionComponent } from './landing/components/projects-section/projects-section.component';
import { ContactSectionComponent } from './landing/components/contact-section/contact-section.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-web-site-angular';
}
