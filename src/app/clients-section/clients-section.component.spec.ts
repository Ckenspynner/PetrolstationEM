import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsSectionComponent } from './clients-section.component';

describe('ClientsSectionComponent', () => {
  let component: ClientsSectionComponent;
  let fixture: ComponentFixture<ClientsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
