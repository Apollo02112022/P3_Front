import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAnnoucementComponent } from './user-annoucement.component';

describe('UserAnnoucementComponent', () => {
  let component: UserAnnoucementComponent;
  let fixture: ComponentFixture<UserAnnoucementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAnnoucementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAnnoucementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
