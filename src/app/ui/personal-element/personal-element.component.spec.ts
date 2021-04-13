import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalElementComponent } from './personal-element.component';

describe('PersonalElementComponent', () => {
  let component: PersonalElementComponent;
  let fixture: ComponentFixture<PersonalElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
