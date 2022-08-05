import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyUserTableComponent } from './modify-user-table.component';

describe('ModifyUserTableComponent', () => {
  let component: ModifyUserTableComponent;
  let fixture: ComponentFixture<ModifyUserTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyUserTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyUserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
