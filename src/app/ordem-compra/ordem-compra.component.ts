import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from './../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss'],
  providers: [OrdemCompraService],
})
export class OrdemCompraComponent implements OnInit {
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

  constructor(private ordemCompraService: OrdemCompraService) {}

  ngOnInit(): void {}

  public confirmarCompra(): void {
    console.log(this.formulario);
  }
}
