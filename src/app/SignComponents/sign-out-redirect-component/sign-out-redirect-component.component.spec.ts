import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignOutRedirectComponentComponent } from './sign-out-redirect-component.component';

describe('SignOutRedirectComponentComponent', () => {
  let component: SignOutRedirectComponentComponent;
  let fixture: ComponentFixture<SignOutRedirectComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignOutRedirectComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignOutRedirectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
