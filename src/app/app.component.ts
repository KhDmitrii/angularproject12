import { Component } from '@angular/core';
import { Personal } from './shared/interfaces/personal.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Список персоналий';

  // name: string;

  personals: Personal[] = [];

  onAddPersonal(e: Personal) {
    // Получаем данные из нашего события personalAdd
    // и добавляем их в массив
    this.personals.push(e);

    // this.personals.push({ name: this.name });
    // this.name = '';
  }

  onDeletePersonal(index: number) {
    this.personals.splice(index, 1);
  }
}
