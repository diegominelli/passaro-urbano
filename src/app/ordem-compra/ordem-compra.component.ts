import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from './../ordem-compra.service';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss'],
  providers: [OrdemCompraService],
})
export class OrdemCompraComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
