import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss'],
})
export class OrdemCompraComponent implements OnInit {
  public complemento: string = '';
  public endereco: string = '';
  public formaPagamento: string = '';
  public numero: string = '';

  public complementoValido: boolean;
  public enderecoValido: boolean;
  public formaPagamentoValido: boolean;
  public numeroValido: boolean;

  public complementoEstadoPrimitivo: boolean = true;
  public enderecoEstadoPrimitivo: boolean = true;
  public formaPagamentoEstadoPrimitivo: boolean = true;
  public numeroEstadoPrimitivo: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  public atualizaEndereco(endereco: string): void {
    // console.log(endereco);
    this.endereco = endereco;

    this.enderecoEstadoPrimitivo = false;

    if (this.endereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }
  }

  public atualizaNumero(numero: string): void {
    // console.log(numero);
    this.numero = numero;

    this.numeroEstadoPrimitivo = false;

    if (this.numero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }
  }

  public atualizaComplemento(complemento: string): void {
    // console.log(complemento);
    this.complemento = complemento;

    this.complementoEstadoPrimitivo = false;

    if (this.complemento.length > 0) {
      this.complementoValido = true;
    }
  }

  public atualizaFormaPagamento(formaPagamento: string): void {
    // console.log(formaPagamento);
    this.formaPagamento = formaPagamento;

    this.formaPagamentoEstadoPrimitivo = false;

    if (this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }
  }
}
