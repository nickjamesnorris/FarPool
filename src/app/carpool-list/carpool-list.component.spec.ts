import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolListComponent } from './carpool-list.component';

describe('CarpoolListComponent', () => {
  let component: CarpoolListComponent;
  let fixture: ComponentFixture<CarpoolListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpoolListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpoolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
