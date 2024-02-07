import { ItemCarrinho } from './shared/item-carrinho.model';

export class CarrinhoService {
  public itens: ItemCarrinho[] = [];

  public exibirItens(): ItemCarrinho[] {
    return this.itens;
  }
}
