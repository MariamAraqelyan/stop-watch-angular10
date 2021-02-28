import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePointsListComponent } from './time-points-list.component';

describe('TimePointsListComponent', () => {
  let component: TimePointsListComponent;
  let fixture: ComponentFixture<TimePointsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimePointsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePointsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
