import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDashbaordComponent } from './adm-dashbaord.component';

describe('AdmDashbaordComponent', () => {
  let component: AdmDashbaordComponent;
  let fixture: ComponentFixture<AdmDashbaordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmDashbaordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmDashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
