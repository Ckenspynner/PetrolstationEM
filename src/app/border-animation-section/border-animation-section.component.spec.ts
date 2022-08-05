import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderAnimationSectionComponent } from './border-animation-section.component';

describe('BorderAnimationSectionComponent', () => {
  let component: BorderAnimationSectionComponent;
  let fixture: ComponentFixture<BorderAnimationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderAnimationSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorderAnimationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
