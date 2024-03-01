import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConseilsComponent } from './view-conseils.component';

describe('ViewConseilsComponent', () => {
  let component: ViewConseilsComponent;
  let fixture: ComponentFixture<ViewConseilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewConseilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewConseilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
