import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStatiqueComponent } from './page-statique.component';

describe('PageStatiqueComponent', () => {
  let component: PageStatiqueComponent;
  let fixture: ComponentFixture<PageStatiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageStatiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageStatiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
