import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularDeleteAccountComponent } from './formular-delete-account.component';

describe('FormularDeleteAccountComponent', () => {
  let component: FormularDeleteAccountComponent;
  let fixture: ComponentFixture<FormularDeleteAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularDeleteAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularDeleteAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
