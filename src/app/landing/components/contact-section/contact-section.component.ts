import { Component, inject, RESPONSE_INIT, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ContactFormUtils } from '../../../utils/contact-form-utils';

interface Response {
  message: string;
}

@Component({
  selector: 'app-contact-section',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-section.component.html',
})
export class ContactSectionComponent {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  messageSend = signal<boolean>(false);
  messageErrorSend = signal<boolean>(false);

  contactFormUtils = ContactFormUtils;

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(5)]],
  });

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      this.http
        .post<Response>(
          'https://my-web-site-backend.vercel.app/send-email',
          formData
        )
        .subscribe(
          (response) => {
            // console.log(
            //   'Message sent successfully',
            //   JSON.stringify(response.message)
            // );
            this.messageSend.set(true);

            // ocultando el alert despues de 3 segundos
            setTimeout(() => {
              this.messageSend.set(false);
            }, 3000);
          },
          (error) => {
            // console.error(
            //   'Error sending message',
            //   JSON.stringify(error['message'])
            // );

            this.messageErrorSend.set(true);
            // ocultando el alert despues de 3 segundos
            setTimeout(() => {
              this.messageErrorSend.set(false);
            }, 3000);
          }
        );
    } else {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.contactForm.reset({});
  }
}
