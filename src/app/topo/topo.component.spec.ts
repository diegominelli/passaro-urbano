import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopoComponent } from './topo.component';

describe('TopoComponent', () => {
  let component: TopoComponent;
  let fixture: ComponentFixture<TopoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopoComponent]
    });
    fixture = TestBed.createComponent(TopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
