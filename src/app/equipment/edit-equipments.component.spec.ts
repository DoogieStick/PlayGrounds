import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquipmentsComponent } from './edit-equipments.component';

describe('EditEquipmentsComponent', () => {
  let component: EditEquipmentsComponent;
  let fixture: ComponentFixture<EditEquipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEquipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEquipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
