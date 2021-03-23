import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormLearningComponent } from './reactive-form-learning.component';

describe('ReactiveFormLearningComponent', () => {
  let component: ReactiveFormLearningComponent;
  let fixture: ComponentFixture<ReactiveFormLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormLearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
