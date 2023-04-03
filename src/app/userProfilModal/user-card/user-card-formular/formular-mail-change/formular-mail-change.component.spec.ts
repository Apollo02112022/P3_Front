import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularMailChangeComponent } from './formular-mail-change.component';

describe('FormularMailChangeComponent', () => {
  let component: FormularMailChangeComponent;
  let fixture: ComponentFixture<FormularMailChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularMailChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularMailChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
