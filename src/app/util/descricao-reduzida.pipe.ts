import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descricaoReduzida',
})
export class DescricaoReduzida implements PipeTransform {
  transform(texto: string, trucarEm: number): string {
    if (texto.length > trucarEm) {
      return texto.substring(0, trucarEm) + '...';
    }

    return texto;
  }
}
