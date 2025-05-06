import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container-custom min-h-screen flex items-center justify-center py-16">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-bold text-mobi-blue-500">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mt-4 mb-6">Página não encontrada</h2>
        <p className="text-gray-600 mb-8">
          A página que você está procurando não existe ou foi removida.
        </p>
        <button 
          onClick={() => navigate('/')}
          className="btn btn-primary"
        >
          <ArrowLeft size={18} className="mr-2" />
          Voltar para a página inicial
        </button>
      </div>
    </div>
  );
};

export default NotFound;