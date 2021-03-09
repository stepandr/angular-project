import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTestLibComponent } from './angular-test-lib.component';

describe('AngularTestLibComponent', () => {
  let component: AngularTestLibComponent;
  let fixture: ComponentFixture<AngularTestLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularTestLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTestLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
