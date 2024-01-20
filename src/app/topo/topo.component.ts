import { Component, OnInit } from '@angular/core';
import { OfertasService } from './../ofertas.service';
import {
  Observable,
  Subject,
  debounceTime,
  switchMap,
  of,
  distinctUntilChanged,
  catchError,
} from 'rxjs';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss'],
  providers: [OfertasService],
})
export class TopoComponent implements OnInit {
  public ofertas: Observable<Oferta[]>;
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) {}

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((termo: string) => {
        console.log('requisicao http para api');
        if (termo.trim() === '') {
          return of<Oferta[]>([]);
        }
        return this.ofertasService.pesquisaOfertas(termo);
      }),
      catchError((erro) => {
        console.log(erro);
        return of<Oferta[]>([]);
      })
    );

    this.ofertas.subscribe((ofertas: Oferta[]) => console.log(ofertas));
  }

  public pesquisa(termoDaBusca: string): void {
    console.log('keyup caracter: ', termoDaBusca);
    this.subjectPesquisa.next(termoDaBusca);
  }
}
