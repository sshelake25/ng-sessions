import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsDetailsComponent } from './persons-details.component';

describe('PersonsDetailsComponent', () => {
  let component: PersonsDetailsComponent;
  let fixture: ComponentFixture<PersonsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
