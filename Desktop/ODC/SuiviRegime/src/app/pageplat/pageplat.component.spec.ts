import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePlatComponent } from './pageplat.component';

describe('PageplatComponent', () => {
  let component: PagePlatComponent
  let fixture: ComponentFixture<PagePlatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagePlatComponent]
    });
    fixture = TestBed.createComponent(PagePlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
