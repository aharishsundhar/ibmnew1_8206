import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestibmComponent } from './testibm.component';

describe('TestibmComponent', () => {
  let component: TestibmComponent;
  let fixture: ComponentFixture<TestibmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestibmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestibmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});