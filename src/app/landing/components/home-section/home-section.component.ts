import { Component } from '@angular/core';

@Component({
  selector: 'app-home-section',
  imports: [],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.css',
})
export class HomeSectionComponent {
  downloadCv() {
    window.location.href =
      'https://drive.google.com/uc?export=download&id=10GdIbz-l6VDP6L8CRh62WOA2u1WYHZ49';
  }

  contactSection() {
    window.location.href = '#contact';
  }
}
