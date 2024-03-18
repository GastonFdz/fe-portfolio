import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private readonly _httpClient= inject(HttpClient);

  constructor() { }

  async contact(contactForm: FormGroup) {
    const formData = contactForm.value;
    const subject = formData.subject ? formData.subject : 'Nuevo contacto desde el formulario del portfolio';
    const recipient = 'gaston.fernandez@yahoo.com';

    const body = `Nombre: ${formData.name} ${formData.lastName}\nEmail de contacto: ${formData.email}\nTeléfono: ${formData.phone}\nMensaje: ${formData.message}`;

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, '_blank');
  }
}
