import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from './../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss'],
  providers: [OrdemCompraService],
})
export class OrdemCompraComponent implements OnInit {
  public formulario: FormGroup = new FormGroup({
    complemento: new FormControl(null),
    endereco: new FormControl(null),
    formaPagamento: new FormControl(null),
    numero: new FormControl(null),
  });

  constructor(private ordemCompraService: OrdemCompraService) {}

  ngOnInit(): void {}

  public confirmarCompra(): void {}
}
