import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemCompraService } from './../ordem-compra.service';
import { NgForm } from '@angular/forms';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss'],
  providers: [OrdemCompraService],
})
export class OrdemCompraComponent implements OnInit {
  @ViewChild('formulario') public formulario: NgForm;

  public idPedidoCompra: number;

  constructor(private ordemCompraService: OrdemCompraService) {}

  ngOnInit(): void {}

  public confirmarCompra(): void {
    let pedido: Pedido = new Pedido(
      this.formulario.value.complemento,
      this.formulario.value.endereco,
      this.formulario.value.formaPagamento,
      this.formulario.value.numero
    );
    this.ordemCompraService
      .efetivarCompra(pedido)
      .subscribe((idPedido: number) => {
        this.idPedidoCompra = idPedido;
      });
  }
}
