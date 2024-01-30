export class Pedido {
  constructor(
    public complemento: string,
    public endereco: string,
    public formaPagamento: string,
    public numero: string
  ) {}
}
