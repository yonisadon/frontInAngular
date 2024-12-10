import { Component } from '@angular/core';
import { SearchComponent } from './shared/components/search/search.component';
import { ButtonBarComponent } from './shared/components/button-bar/button-bar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    SearchComponent,
    ButtonBarComponent
  ],
  })
export class AppComponent {
  title = 'matchmaking-frontend';
}

