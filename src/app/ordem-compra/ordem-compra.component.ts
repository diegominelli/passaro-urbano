import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemCompraService } from './../ordem-compra.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss'],
  providers: [OrdemCompraService],
})
export class OrdemCompraComponent implements OnInit {
  @ViewChild('formulario') public formulario: NgForm;

  constructor(private ordemCompraService: OrdemCompraService) {}

  ngOnInit(): void {}

  public confirmarCompra(): void {
    console.log(this.formulario);
  }
}
