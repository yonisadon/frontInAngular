import { Component } from '@angular/core';

@Component({
  selector: 'app-new-person-form',
  standalone: true, // הפיכת הקומפוננטה ל-Standalone
  templateUrl: './new-person-form.component.html',
  styleUrl: './new-person-form.component.scss'
})

export class NewPersonFormComponent {


  closeModalA(modalId: string): void {
  console.log('סגור');
    const modal = document.getElementById(modalId);
      console.log('1');
      console.log(modal);

//     if (modal) {
//       console.log('2');

      modal.style.display = 'none';  // הסתרת המודל
    }
  }

  // פונקציה לשמירה (הוספת גבר)
  saveMenData(): void {
    console.log('שמור גבר');
    // כאן אתה יכול להוסיף את הלוגיקה לשמירה של נתוני הגבר
  }

  // פונקציה לשמירה (הוספת אישה)
  saveWomenData(): void {
    console.log('שמור אישה');
    // כאן אתה יכול להוסיף את הלוגיקה לשמירה של נתוני האישה
  }
}
