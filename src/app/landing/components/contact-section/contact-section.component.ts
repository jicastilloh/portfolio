import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgClass } from '@angular/common';
import emailjs from '@emailjs/browser';
import { ContactFormUtils } from '../../../utils/contact-form-utils';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-contact-section',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './contact-section.component.html',
})
export class ContactSectionComponent {
  private fb = inject(FormBuilder);

  isSending = signal<boolean>(false);
  messageSend = signal<boolean>(false);
  messageErrorSend = signal<boolean>(false);

  contactFormUtils = ContactFormUtils;

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(5)]],
    // Campo honeypot: invisible para personas, si llega lleno se descarta como spam
    botcheck: [''],
  });

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const { name, email, message, botcheck } = this.contactForm.value;

    // Honeypot: si un bot rellenó este campo oculto, simulamos éxito sin enviar nada
    if (botcheck) {
      this.messageSend.set(true);
      this.contactForm.reset();
      this.hideAlertsAfterDelay();
      return;
    }

    this.isSending.set(true);

    emailjs
      .send(
        environment.emailJs.serviceId,
        environment.emailJs.templateId,
        { name, email, message },
        { publicKey: environment.emailJs.publicKey }
      )
      .then(() => {
        this.isSending.set(false);
        this.messageSend.set(true);
        this.contactForm.reset();
        this.hideAlertsAfterDelay();
      })
      .catch(() => {
        this.isSending.set(false);
        this.messageErrorSend.set(true);
        this.hideAlertsAfterDelay();
      });
  }

  private hideAlertsAfterDelay() {
    setTimeout(() => {
      this.messageSend.set(false);
      this.messageErrorSend.set(false);
    }, 3000);
  }
}
