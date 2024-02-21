import { Component, Inject, AfterViewInit, ViewChild, ElementRef  } from '@angular/core';
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

  numeroTelefono = "+542235468926"; // Tu número de teléfono sin espacios ni caracteres especiales

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit(){
    this.telegramButton.nativeElement.addEventListener('click', this.openConversationTelegram.bind(this)); 
    this.skypeButton.nativeElement.addEventListener('click', this.openConversationSkype.bind(this)); 
  }
  
  openConversationTelegram() {   
    let nombreUsuarioTelegram = "Gastonmf"; // Opcional, si tienes un nombre de usuario 
    let urlTelegram = `https://telegram.me/${nombreUsuarioTelegram}?start=${this.numeroTelefono}`;
    window.open(urlTelegram, "_blank")
  }
  openConversationSkype() {    
    let nombreUsuarioSkype = "live:gastonmfernandez";
    let urlSkype: string = `skype:${nombreUsuarioSkype}?chat`;
    window.open(urlSkype, "_blank")
  }
}
