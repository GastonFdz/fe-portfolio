import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utils } from '../shared/utils/utils';
import { apiConfig } from '../interfaces/config-data';
import { Contact } from '../interfaces/contact';
import TelegramBot from 'node-telegram-bot-api';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  apiUrl = apiConfig.urlContactService ? apiConfig.urlContactService : '';
  constructor(
    private http: HttpClient,
    private bot: TelegramBot
    ) {
      this.bot = new TelegramBot(Utils.botTokenTelegram, { polling: true });
      this.bot.getChat('@TU_BOT_USERNAME').then((chat) => {
        Utils.chatIdTelegram = chat.id.toString();
      });
     }
     
  async contactService(body: Contact): Promise<unknown> {
    if (this.apiUrl && body.verfyFields()) {
      return await this.http.post(this.apiUrl, body).subscribe(
        (resp) => {
          console.log(resp);
        },
        (error) => {
          console.error(error);
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

    this.bot.sendMessage(Utils.chatIdTelegram, body);
  }
}
