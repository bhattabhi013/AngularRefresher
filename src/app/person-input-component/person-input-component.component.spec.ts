import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonInputComponentComponent } from './person-input-component.component';

describe('PersonInputComponentComponent', () => {
  let component: PersonInputComponentComponent;
  let fixture: ComponentFixture<PersonInputComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonInputComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonInputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
