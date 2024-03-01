import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConseilComponent } from './add-conseil.component';

describe('AddConseilComponent', () => {
  let component: AddConseilComponent;
  let fixture: ComponentFixture<AddConseilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConseilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddConseilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
