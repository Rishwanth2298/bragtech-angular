import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteDevelopmentPageComponent } from './website-development-page.component';

describe('WebsiteDevelopmentPageComponent', () => {
  let component: WebsiteDevelopmentPageComponent;
  let fixture: ComponentFixture<WebsiteDevelopmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteDevelopmentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteDevelopmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
