import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPlaygroundsComponent } from './editar-playgrounds.component';

describe('EditarPlaygroundsComponent', () => {
  let component: EditarPlaygroundsComponent;
  let fixture: ComponentFixture<EditarPlaygroundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPlaygroundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPlaygroundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
