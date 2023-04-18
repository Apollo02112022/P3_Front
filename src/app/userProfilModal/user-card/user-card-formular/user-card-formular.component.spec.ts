import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardFormularComponent } from './user-card-formular.component';

describe('UserCardFormularComponent', () => {
  let component: UserCardFormularComponent;
  let fixture: ComponentFixture<UserCardFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCardFormularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCardFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
