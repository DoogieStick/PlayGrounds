import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundDetailComponent } from './playground-detail.component';

describe('PlaygroundDetailComponent', () => {
  let component: PlaygroundDetailComponent;
  let fixture: ComponentFixture<PlaygroundDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
