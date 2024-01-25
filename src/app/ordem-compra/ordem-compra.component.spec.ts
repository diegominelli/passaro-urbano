import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemCompraComponent } from './ordem-compra.component';

describe('OrdemCompraComponent', () => {
  let component: OrdemCompraComponent;
  let fixture: ComponentFixture<OrdemCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdemCompraComponent]
    });
    fixture = TestBed.createComponent(OrdemCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
