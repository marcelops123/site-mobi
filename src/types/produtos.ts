export interface Produto {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  precoAntigo?: number;
  tamanhos: string[];
  quantidade: number;
  prazoEntrega: string;
  imagem: string;
}