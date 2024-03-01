import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeMessageComponent } from './demande-message.component';

describe('DemandeMessageComponent', () => {
  let component: DemandeMessageComponent;
  let fixture: ComponentFixture<DemandeMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
