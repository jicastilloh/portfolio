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
      'https://drive.google.com/file/d/1lbl_HNCjR_lzafQFRHbrDCH3vUynMkRv/view?usp=sharing';
  }

  contactSection() {
    window.location.href = '#contact';
  }
}
