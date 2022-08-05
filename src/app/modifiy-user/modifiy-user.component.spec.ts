import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiyUserComponent } from './modifiy-user.component';

describe('ModifiyUserComponent', () => {
  let component: ModifiyUserComponent;
  let fixture: ComponentFixture<ModifiyUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiyUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifiyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
