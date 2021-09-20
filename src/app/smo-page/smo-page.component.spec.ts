import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoPageComponent } from './smo-page.component';

describe('SmoPageComponent', () => {
  let component: SmoPageComponent;
  let fixture: ComponentFixture<SmoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
