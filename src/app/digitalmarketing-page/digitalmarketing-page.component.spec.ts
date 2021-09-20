import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalmarketingPageComponent } from './digitalmarketing-page.component';

describe('DigitalmarketingPageComponent', () => {
  let component: DigitalmarketingPageComponent;
  let fixture: ComponentFixture<DigitalmarketingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalmarketingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalmarketingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
