import { Component, Inject, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements AfterViewInit {

  @ViewChild('telegram', { static: true }) telegramButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('skype', { static: true }) skypeButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('linkedin', { static: true }) linkedinButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('github', { static: true }) githubButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('whatsapp', { static: true }) whatsappButton!: ElementRef<HTMLButtonElement>;

  phoneNumber = "+542235468926"; // Tu número de teléfono sin espacios ni caracteres especiales

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngAfterViewInit() {
    this.telegramButton.nativeElement.addEventListener('click', this.openConversationTelegram.bind(this));
    this.skypeButton.nativeElement.addEventListener('click', this.openConversationSkype.bind(this));
    this.linkedinButton.nativeElement.addEventListener('click', this.openConversationLinkedin.bind(this));
    this.githubButton.nativeElement.addEventListener('click', this.openConversationGithub.bind(this));
    this.whatsappButton.nativeElement.addEventListener('click', this.openConversationWhtsapp.bind(this));
  }

  openConversationTelegram() {
    let userNameTelegram = "Gastonmf"; // Opcional, si tienes un nombre de usuario 
    let urlTelegram = `https://telegram.me/${userNameTelegram}?start=${this.phoneNumber}`;
    window.open(urlTelegram, "_blank")
  }

  openConversationSkype() {
    let userNameSkype = "live:gastonmfernandez";
    let urlSkype: string = `skype:${userNameSkype}?chat`;
    window.open(urlSkype, "_blank")
  }

  openConversationGithub() {
    let userNameGithub = "GastonFdz";
    let urlGithub: string = `https://github.com/${userNameGithub}`;
    window.open(urlGithub, "_blank")
  }

  openConversationWhtsapp() {
    let urlWhtsapp: string = `https://wa.me/${this.phoneNumber}?text=Hola!%20Tengo%20una%20propuesta%20que%20puede%20ser%20de%20tu%20interés.`;
    window.open(urlWhtsapp, "_blank")
  }

  openConversationLinkedin() {
    let userNameLinkedin = "gastonfdz";
    let urlLinkedin: string = `https://www.linkedin.com/messaging/thread/new/?recipient=${userNameLinkedin}`;
    window.open(urlLinkedin, "_blank")
  }

}
