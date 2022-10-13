import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestShellComponent } from './test-shell.component';

describe('TestShellComponent', () => {
  let component: TestShellComponent;
  let fixture: ComponentFixture<TestShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
