import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckListUnitComponent } from './check-list-unit.component';

describe('CheckListUnitComponent', () => {
  let component: CheckListUnitComponent;
  let fixture: ComponentFixture<CheckListUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckListUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckListUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
