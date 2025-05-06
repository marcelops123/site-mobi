import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Produto } from '../types/produtos';

interface ProdutoCardProps {
  produto: Produto;
}

const ProdutoCard: React.FC<ProdutoCardProps> = ({ produto }) => {
  return (
    <Link 
      to={`/produtos/${produto.id}`} 
      className="card p-4 group animate-hover"
    >
      <div className="overflow-hidden rounded-lg mb-4">
        <img 
          src={produto.imagem} 
          alt={produto.nome} 
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="font-medium text-lg mb-2">{produto.nome}</h3>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-mobi-blue-600">
          R$ {produto.preco.toFixed(2).replace('.', ',')}
        </p>
        <span className="text-sm text-gray-500">
          {produto.tamanhos.join(', ')}
        </span>
      </div>
      <div className="mt-4">
        <span className="flex items-center justify-center gap-2 bg-mobi-blue-500 text-white py-2 px-4 rounded-md w-full group-hover:bg-mobi-blue-600 transition-colors">
          <ShoppingBag size={16} />
          Ver detalhes
        </span>
      </div>
    </Link>
  );
};

export default ProdutoCard;