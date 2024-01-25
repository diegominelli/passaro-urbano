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
        if (termo.trim() === '') {
          return of<Oferta[]>([]);
        }
        return this.ofertasService.pesquisaOfertas(termo);
      }),
      catchError((erro) => {
        return of<Oferta[]>([]);
      })
    );
  }

  public pesquisa(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca);
  }
}
