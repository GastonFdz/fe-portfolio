import { Component } from '@angular/core';
import { Utils } from '../../shared/utils/utils.ts';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = Utils.fullName;
}
