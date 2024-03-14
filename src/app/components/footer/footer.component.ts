import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as configData from '../../../assets/configData.json';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements AfterViewInit {

  @ViewChild('telegram', { static: true }) telegramButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('skype', { static: true }) skypeButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('linkedin', { static: true }) linkedinButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('github', { static: true }) githubButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('whatsapp', { static: true }) whatsappButton!: ElementRef<HTMLButtonElement>;

  phoneNumber = configData.myData.contact.phone; // Tu número de teléfono sin espacios ni caracteres especiales

  constructor() { }

  ngAfterViewInit() {
    this.telegramButton.nativeElement.addEventListener('click', this.openConversationTelegram.bind(this));
    this.skypeButton.nativeElement.addEventListener('click', this.openConversationSkype.bind(this));
    this.linkedinButton.nativeElement.addEventListener('click', this.openConversationLinkedin.bind(this));
    this.githubButton.nativeElement.addEventListener('click', this.openConversationGithub.bind(this));
    this.whatsappButton.nativeElement.addEventListener('click', this.openConversationWhtsapp.bind(this));
  }

  openConversationTelegram() {
    let userNameTelegram = configData.myData.contact.telegram; // Opcional, si tienes un nombre de usuario 
    let urlTelegram = configData.config.urlTelegram + userNameTelegram + `?start=${this.phoneNumber}`;
    window.open(urlTelegram, "_blank")
  }

  openConversationSkype() {
    window.open(configData.myData.contact.skype, "_blank")
  }

  openConversationGithub() {

    let urlGithub: string = configData.config.urlGithub + configData.myData.contact.github;
    window.open(urlGithub, "_blank")
  }

  openConversationWhtsapp() {
    let urlWhtsapp: string = configData.config.urlWhatsapp + this.phoneNumber + configData.config.textoWhatsappMsg;
    window.open(urlWhtsapp, "_blank")
  }

  openConversationLinkedin() {
    let userNameLinkedin = configData.myData.contact.linkedin;

    let urlLinkedin: string = configData.config.urlLinkedin + userNameLinkedin;
    window.open(urlLinkedin, "_blank")
  }

}
