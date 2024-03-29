import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Utils } from '../../shared/utils/utils';


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


  constructor() { }

  ngAfterViewInit() {
    this.telegramButton.nativeElement.addEventListener('click', this.openConversationTelegram.bind(this));
    this.skypeButton.nativeElement.addEventListener('click', this.openConversationSkype.bind(this));
    this.linkedinButton.nativeElement.addEventListener('click', this.openConversationLinkedin.bind(this));
    this.githubButton.nativeElement.addEventListener('click', this.openConversationGithub.bind(this));
    this.whatsappButton.nativeElement.addEventListener('click', this.openConversationWhtsapp.bind(this));
  }

  openConversationTelegram() {
    window.open(Utils.urlTelegram, "_blank")
  }

  openConversationSkype() {
    window.open(Utils.urlSkype, "_blank")
  }

  openConversationGithub() {
    window.open(Utils.urlGithub, "_blank")
  }

  openConversationWhtsapp() {
    window.open(Utils.urlWhtsapp, "_blank")
  }

  openConversationLinkedin() {
    window.open(Utils.urlLinkedin, "_blank")
  }

}
