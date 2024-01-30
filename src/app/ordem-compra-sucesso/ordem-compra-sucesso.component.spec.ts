import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemCompraSucessoComponent } from './ordem-compra-sucesso.component';

describe('OrdemCompraSucessoComponent', () => {
  let component: OrdemCompraSucessoComponent;
  let fixture: ComponentFixture<OrdemCompraSucessoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdemCompraSucessoComponent]
    });
    fixture = TestBed.createComponent(OrdemCompraSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
