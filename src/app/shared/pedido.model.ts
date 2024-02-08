import { ItemCarrinho } from './item-carrinho.model';

export class Pedido {
  constructor(
    public complemento: string,
    public endereco: string,
    public formaPagamento: string,
    public numero: string,
    public itens: Array<ItemCarrinho>
  ) {}
}
