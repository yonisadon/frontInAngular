import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-home',
  standalone: true, // הפיכת הקומפוננטה ל-Standalone
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [SearchComponent]

})
 export class HomeComponent {
//   onClick() {
//     alert('הכפתור נלחץ');
  openMenModal() {
    // הלוגיקה שלך כאן
  }
    runJobFromDate() {
      // הלוגיקה שלך כאן
    }
    openWomenModal() {
      // הלוגיקה שלך כאן
    }

    openMatchModal() {
      // הלוגיקה שלך כאן
    }
   }



