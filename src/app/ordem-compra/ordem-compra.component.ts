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

  constructor() {}

  ngOnInit(): void {}

  public atualizaEndereco(endereco: string): void {
    console.log(endereco);

    this.endereco = endereco;
  }

  public atualizaNumero(numero: string): void {
    console.log(numero);
    this.numero = numero;
  }

  public atualizaComplemento(complemento: string): void {
    console.log(complemento);
    this.complemento = complemento;
  }

  public atualizaFormaPagamento(formaPagamento: string): void {
    console.log(formaPagamento);
    this.formaPagamento = formaPagamento;
  }
}
