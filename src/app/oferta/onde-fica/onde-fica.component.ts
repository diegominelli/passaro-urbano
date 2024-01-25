import { OfertasService } from './../../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.scss'],
  providers: [OfertasService],
})
export class OndeFicaComponent implements OnInit {
  public ondeFica: string = '';

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) {}
  ngOnInit(): void {
    this.route.parent.params.subscribe((parametros: Params) => {
      this.ofertasService
        .getOndeFicaOfertaPorId(parametros['id'])
        .then((descricao: string) => {
          this.ondeFica = descricao;
        });
    });
  }
}
