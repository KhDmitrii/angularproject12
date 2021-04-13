import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personal } from 'src/app/shared/interfaces/personal.interface';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css'],
})
export class PersonalFormComponent implements OnInit {
  // Создаем собственное событие,
  // которое в качетсве объекта события будет передавать
  // объект интерфейса Personal
  @Output() personalAdd = new EventEmitter<Personal>();

  name: string;

  constructor() {}

  ngOnInit(): void {}

  onAddPersonal() {
    // При помощи метода emit заставляем событие сработать
    // в параметры метода отправляем то, что должно быть
    // передано событием
    this.personalAdd.emit({ name: this.name });
    this.name = '';
  }
}
