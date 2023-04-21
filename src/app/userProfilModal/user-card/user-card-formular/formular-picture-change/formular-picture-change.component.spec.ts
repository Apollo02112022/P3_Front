import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularPictureChangeComponent } from './formular-picture-change.component';

describe('FormularPictureChangeComponent', () => {
  let component: FormularPictureChangeComponent;
  let fixture: ComponentFixture<FormularPictureChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularPictureChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularPictureChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
