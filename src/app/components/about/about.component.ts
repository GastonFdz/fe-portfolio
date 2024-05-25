import { Component } from '@angular/core';
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    imports: [SidebarComponent]
})
export class AboutComponent {

}
