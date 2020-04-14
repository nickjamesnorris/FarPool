import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateACarpoolComponent } from './create-a-carpool.component';

describe('CreateACarpoolComponent', () => {
  let component: CreateACarpoolComponent;
  let fixture: ComponentFixture<CreateACarpoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateACarpoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateACarpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
