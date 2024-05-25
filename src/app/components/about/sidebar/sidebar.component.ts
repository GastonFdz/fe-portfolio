import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    const scrollTriggers = document.querySelectorAll('a.js-scroll-trigger[href*="#"]:not([href="#"])');
    scrollTriggers.forEach(trigger => {
      trigger.addEventListener('click', this.smoothScroll);
    });

    const menuToggle = document.querySelectorAll('.js-scroll-trigger');
    menuToggle.forEach(toggle => {
      toggle.addEventListener('click', this.closeMenu);
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    console.log(event);

    const sideNav = document.querySelector('#sideNav');
    if (sideNav) {
      const sideNavRect = sideNav.getBoundingClientRect();
      const isInViewport = sideNavRect.top >= 0 && sideNavRect.left >= 0 &&
        sideNavRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        sideNavRect.right <= (window.innerWidth || document.documentElement.clientWidth);

      if (isInViewport) {
        sideNav.classList.add('active');
      } else {
        sideNav.classList.remove('active');
      }
    }
  }

  smoothScroll(event: Event) {
    event.preventDefault();
    const href = (event.currentTarget as HTMLAnchorElement).getAttribute('href');
    if (href) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }

    }
  }

  closeMenu(event: Event) {
    console.log(event);
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }
  }

}
