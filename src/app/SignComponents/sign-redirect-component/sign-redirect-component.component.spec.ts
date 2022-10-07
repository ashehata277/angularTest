import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignRedirectComponentComponent } from './sign-redirect-component.component';

describe('SignRedirectComponentComponent', () => {
  let component: SignRedirectComponentComponent;
  let fixture: ComponentFixture<SignRedirectComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignRedirectComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignRedirectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
