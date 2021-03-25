import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormLearnComponent } from './template-form-learn.component';

describe('TemplateFormLearnComponent', () => {
  let component: TemplateFormLearnComponent;
  let fixture: ComponentFixture<TemplateFormLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateFormLearnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
