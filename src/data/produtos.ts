import { Produto } from '../types/produtos';

export const produtos: Produto[] = [
  {
    id: '1',
    nome: 'Camiseta MOBI - Até que Ele Venha',
    descricao: 'Camiseta Até que Ele Venha da MOBI no modelo clássico, confeccionada em algodão de alta qualidade. Estampa com o logo da Mocidade Batista Independente na frente e frase "Até que Ele Venha" nas costas. Perfeita para os encontros e eventos da juventude.',
    preco: 130.00,
    precoAntigo: 150.00,
    tamanhos: ['P', 'M', 'G'],
    quantidade: 15,
    prazoEntrega: '7 dias úteis',
    imagem: '../assets/camiseta1.JPG'
  },
  {
    id: '2',
    nome: 'Camiseta MOBI - Até os Confins',
    descricao: 'Camiseta estilizada com design urbano e moderno. Confeccionada em malha premium que oferece conforto e durabilidade. Design exclusivo com elementos gráficos e versículo bíblico. Ideal para o dia a dia e para representar a MOBI com estilo.',
    preco: 130.00,
    precoAntigo: 150.00,
    tamanhos: ['P', 'M', 'G'],
    quantidade: 8,
    prazoEntrega: '7 dias úteis',
    imagem: '../assets/camiseta2.JPG'
  },
  {
    id: '3',
    nome: 'Camiseta MOBI - Até que Ele Venha',
    descricao: 'Camiseta Até que Ele Venha da MOBI no modelo preto, confeccionada em algodão de alta qualidade. Estampa com o logo da Mocidade Batista Independente na frente e frase "Até que Ele Venha" nas costas. Perfeita para os encontros e eventos da juventude.',
    preco: 130.00,
    precoAntigo: 150.00,
    tamanhos: ['P', 'M', 'G'],
    quantidade: 5,
    prazoEntrega: '10 dias úteis',
    imagem: '../assets/camiseta3.JPG'
  }
];