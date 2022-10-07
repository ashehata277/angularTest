import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSharedCompomentComponent } from './test-shared-compoment.component';

describe('TestSharedCompomentComponent', () => {
  let component: TestSharedCompomentComponent;
  let fixture: ComponentFixture<TestSharedCompomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSharedCompomentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSharedCompomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
