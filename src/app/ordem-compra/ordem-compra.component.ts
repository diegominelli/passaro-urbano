import { Component, OnInit } from '@angular/core';
import { Pedido } from '../shared/pedido.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrdemCompraService } from './../ordem-compra.service';
import { CarrinhoService } from '../carrinho.service';
import { ItemCarrinho } from '../shared/item-carrinho.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss'],
  providers: [OrdemCompraService],
})
export class OrdemCompraComponent implements OnInit {
  public idPedidoCompra: number;
  public itensCarrinho: ItemCarrinho[] = [];

  public formulario: FormGroup = new FormGroup({
    complemento: new FormControl(null),
    endereco: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(120),
    ]),
    formaPagamento: new FormControl(null, [Validators.required]),
    numero: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(20),
    ]),
  });

  constructor(
    private ordemCompraService: OrdemCompraService,
    public carrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.exibirItens();
    console.log(this.itensCarrinho);
  }

  public confirmarCompra(): void {
    if (this.formulario.status === 'INVALID') {
      console.log('formulário está inválido');

      this.formulario.get('complemento').markAllAsTouched();
      this.formulario.get('endereco').markAllAsTouched();
      this.formulario.get('formaPagamento').markAllAsTouched();
      this.formulario.get('numero').markAllAsTouched();
    } else {
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
          console.log(this.idPedidoCompra);
        });
    }
  }

  public adicionar(item: ItemCarrinho): void {
    this.carrinhoService.adicionarQuantidade(item);
  }

  public diminuir(item: ItemCarrinho): void {
    this.carrinhoService.diminuirQuantidade(item);
  }
}
