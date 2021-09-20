import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDevelopmentPageComponent } from './application-development-page.component';

describe('ApplicationDevelopmentPageComponent', () => {
  let component: ApplicationDevelopmentPageComponent;
  let fixture: ComponentFixture<ApplicationDevelopmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationDevelopmentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationDevelopmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
