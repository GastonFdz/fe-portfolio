import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Utils } from '../../shared/utils/utils';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  title = Utils.fullName;
  isAboutPage = false;
  logoTextClass = '';

  constructor(private router: Router) { }

  baseUrl = Utils.baseUrl;

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isAboutPage = event.url.includes('/about') || event.url.includes('/');
        this.logoTextClass = this.isAboutPage ? 'hidden' : '';
        console.log('isAboutPage: ', this.isAboutPage, '\n logoTextClass: ', this.logoTextClass);

      }
    });
  }
}
