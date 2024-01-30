import { Injectable } from '@angular/core';
import { Pedido } from './shared/pedido.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { URL_API } from './app.api';

@Injectable()
export class OrdemCompraService {
  constructor(private http: HttpClient) {}

  public efetivarCompra(pedido: Pedido): Observable<number> {
    let headers: HttpHeaders = new HttpHeaders();

    headers.append('Content-type', 'applicartion.json');

    return this.http
      .post<any>(`${URL_API}/pedidos`, pedido, { headers: headers })
      .pipe(map((resposta: Response) => resposta['id']));
  }
}
