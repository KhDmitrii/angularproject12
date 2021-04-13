import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Personal } from 'src/app/shared/interfaces/personal.interface';

@Component({
  selector: 'app-personal-element',
  templateUrl: './personal-element.component.html',
  styleUrls: ['./personal-element.component.css'],
})
export class PersonalElementComponent implements OnInit {
  // Данное свойство класса будет вести себя,
  // как свойство элемента(html)
  @Input() inputPersonal: Personal;

  // Событие для удаления элемента, в качестве объекта ничего
  // не отправляет
  @Output() personalDelete = new EventEmitter<null>();

  constructor() {}

  ngOnInit(): void {}

  onDeletePersonal() {
    this.personalDelete.emit();
  }
}
