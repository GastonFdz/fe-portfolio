import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConfig } from '../interfaces/config-data';
import { Contact } from '../interfaces/contact';
import { Utils } from '../shared/utils/utils';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  apiUrl = apiConfig.urlContactService ? apiConfig.urlContactService : '';
  constructor(
    private http: HttpClient,
  ) {
  }


  async sendMessage(text:string) {
    const url = `https://api.telegram.org/bot${Utils.botTokenTelegram}/sendMessage`;
    const body = {
      chat_id: Utils.chatIdTelegram,
      text: text
    };
    this.http.post(url, body).subscribe(
      response => {
        console.log('Mensaje enviado correctamente', response);
      },
      error => {
        console.error('Error al enviar el mensaje', error);
      }
    );
  }

  async contactService(body: Contact): Promise<unknown> {
    if (this.apiUrl && body.verfyFields()) {
      return await this.http.post(this.apiUrl, body).subscribe(
        (resp) => {
          console.log(resp);
        },
        (error) => {
          console.error('Error al enviar el formulario a Telegram: ',error);
        }
      );
    } else {
      console.error('url not found or body failed');
      return null;
    }
  }

  async contact(contactData: Contact) {
    console.log('contact().contactData=', contactData);
    //await this.contactService(contactData);

    const subject = contactData.subject ? contactData.subject : Utils.subject;

    const body = `Motivo: ${subject}\nNombre: ${contactData.name} ${contactData.lastname}\nEmail de contacto: ${contactData.email}\nTeléfono: ${contactData.phone}\nMensaje: ${contactData.message}`;
    await this.sendMessage(body);
  }
}
