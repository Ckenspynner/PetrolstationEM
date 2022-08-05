import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationLogoSectionComponent } from './station-logo-section.component';

describe('StationLogoSectionComponent', () => {
  let component: StationLogoSectionComponent;
  let fixture: ComponentFixture<StationLogoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationLogoSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationLogoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
