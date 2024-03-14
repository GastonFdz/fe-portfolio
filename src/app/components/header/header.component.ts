import { Component } from '@angular/core';
import * as configData from '../../../assets/configData.json';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = configData.myData.personal.name + " " + configData.myData.personal.surname;
}
