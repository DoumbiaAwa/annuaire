import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneProductionComponent } from './zone-production.component';

describe('ZoneProductionComponent', () => {
  let component: ZoneProductionComponent;
  let fixture: ComponentFixture<ZoneProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneProductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
