import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardButtonComponent } from './user-card-button.component';

describe('UserCardButtonComponent', () => {
  let component: UserCardButtonComponent;
  let fixture: ComponentFixture<UserCardButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCardButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
