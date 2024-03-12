import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSousregionComponent } from './add-sousregion.component';

describe('AddSousregionComponent', () => {
  let component: AddSousregionComponent;
  let fixture: ComponentFixture<AddSousregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSousregionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSousregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
