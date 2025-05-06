import { Produto } from '../types/produtos';

export const produtos: Produto[] = [
  {
    id: '1',
    nome: 'Camiseta MOBI - Modelo Clássico',
    descricao: 'Camiseta oficial da MOBI no modelo clássico, confeccionada em algodão de alta qualidade. Estampa com o logo da Mocidade Batista Independente na frente e frase "Jovens para Cristo" nas costas. Perfeita para os encontros e eventos da juventude.',
    preco: 49.90,
    precoAntigo: 59.90,
    tamanhos: ['P', 'M', 'G'],
    quantidade: 15,
    prazoEntrega: '7 dias úteis',
    imagem: 'https://images.pexels.com/photos/5868741/pexels-photo-5868741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '2',
    nome: 'Camiseta MOBI - Modelo Urbano',
    descricao: 'Camiseta estilizada com design urbano e moderno. Confeccionada em malha premium que oferece conforto e durabilidade. Design exclusivo com elementos gráficos e versículo bíblico. Ideal para o dia a dia e para representar a MOBI com estilo.',
    preco: 54.90,
    tamanhos: ['P', 'M', 'G'],
    quantidade: 8,
    prazoEntrega: '7 dias úteis',
    imagem: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '3',
    nome: 'Camiseta MOBI - Edição Limitada',
    descricao: 'Edição especial e limitada da camiseta MOBI, criada para o retiro anual. Tecido premium com acabamento diferenciado e design exclusivo. Disponível em quantidade limitada. Garanta já a sua e faça parte desta história!',
    preco: 64.90,
    tamanhos: ['P', 'M', 'G'],
    quantidade: 5,
    prazoEntrega: '10 dias úteis',
    imagem: 'https://images.pexels.com/photos/7691283/pexels-photo-7691283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];