import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularPasswordChangeComponent } from './formular-password-change.component';

describe('FormularPasswordChangeComponent', () => {
  let component: FormularPasswordChangeComponent;
  let fixture: ComponentFixture<FormularPasswordChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularPasswordChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularPasswordChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
