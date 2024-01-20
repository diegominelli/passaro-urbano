import { Component, OnInit } from '@angular/core';
import { OfertasService } from './../ofertas.service';
import { Observable } from 'rxjs';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss'],
  providers: [OfertasService],
})
export class TopoComponent implements OnInit {
  public ofertas: Observable<Oferta[]>;

  constructor(private ofertasService: OfertasService) {}

  ngOnInit(): void {}

  public pesquisa(termoDaBusca: string): void {
    this.ofertas = this.ofertasService.pesquisaOfertas(termoDaBusca);

    this.ofertas.subscribe(
      (ofertas: Oferta[]) => console.log(ofertas),
      (erro: any) => console.log('Erro status', erro.status)
    );
  }
}
