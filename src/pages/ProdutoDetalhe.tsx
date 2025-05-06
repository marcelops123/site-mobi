import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Truck, ShoppingBag } from 'lucide-react';
import TamanhoSelector from '../components/TamanhoSelector';
import WhatsAppButton from '../components/WhatsAppButton';
import { produtos } from '../data/produtos';
import { Produto } from '../types/produtos';

const ProdutoDetalhe: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [produto, setProduto] = useState<Produto | undefined>(undefined);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulando uma busca no banco de dados
    const produtoEncontrado = produtos.find(p => p.id === id);
    
    if (produtoEncontrado) {
      setProduto(produtoEncontrado);
      setTamanhoSelecionado(produtoEncontrado.tamanhos[0]);
    }
    
    setLoading(false);
  }, [id]);

  const voltarParaProdutos = () => {
    navigate('/produtos');
  };

  const formatarMensagemWhatsApp = () => {
    if (!produto) return '';
    
    return `Olá, estou interessado em comprar a camiseta "${produto.nome}" no tamanho ${tamanhoSelecionado}. Gostaria de mais informações sobre disponibilidade e forma de pagamento.`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-mobi-blue-500"></div>
      </div>
    );
  }

  if (!produto) {
    return (
      <div className="container-custom py-16 min-h-screen">
        <div className="max-w-lg mx-auto text-center p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Produto não encontrado</h1>
          <p className="text-gray-600 mb-6">
            O produto que você está procurando não está disponível ou não existe.
          </p>
          <button
            onClick={voltarParaProdutos}
            className="btn btn-primary"
          >
            <ArrowLeft size={18} className="mr-2" />
            Voltar para Produtos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-16 min-h-screen">
      <button
        onClick={voltarParaProdutos}
        className="mb-8 inline-flex items-center text-gray-600 hover:text-mobi-blue-500"
      >
        <ArrowLeft size={18} className="mr-1" />
        Voltar para produtos
      </button>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Imagem do produto */}
          <div className="h-full">
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Detalhes do produto */}
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{produto.nome}</h1>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-mobi-blue-600">
                R$ {produto.preco.toFixed(2).replace('.', ',')}
              </span>
              {produto.precoAntigo && (
                <span className="ml-3 text-lg text-gray-500 line-through">
                  R$ {produto.precoAntigo.toFixed(2).replace('.', ',')}
                </span>
              )}
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">{produto.descricao}</p>

            <div className="mb-6">
              <div className="flex items-center gap-2">
                <ShoppingBag size={18} className="text-mobi-blue-500" />
                <span className="font-medium">Disponibilidade:</span>
                <span className="text-gray-600">{produto.quantidade} unidades</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2">
                <Truck size={18} className="text-mobi-blue-500" />
                <span className="font-medium">Prazo de entrega:</span>
                <span className="text-gray-600">{produto.prazoEntrega}</span>
              </div>
            </div>

            <TamanhoSelector
              tamanhos={produto.tamanhos}
              tamanhoSelecionado={tamanhoSelecionado}
              onChange={setTamanhoSelecionado}
            />

            <WhatsAppButton 
              telefone="5538997489630" 
              mensagem={formatarMensagemWhatsApp()} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdutoDetalhe;