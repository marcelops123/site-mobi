import React from 'react';

interface TamanhoSelectorProps {
  tamanhos: string[];
  tamanhoSelecionado: string;
  onChange: (tamanho: string) => void;
}

const TamanhoSelector: React.FC<TamanhoSelectorProps> = ({
  tamanhos,
  tamanhoSelecionado,
  onChange
}) => {
  return (
    <div className="mb-6">
      <h3 className="font-medium mb-2">Tamanho:</h3>
      <div className="flex gap-2">
        {tamanhos.map((tamanho) => (
          <button
            key={tamanho}
            className={`w-10 h-10 rounded-md flex items-center justify-center font-medium transition-all ${
              tamanhoSelecionado === tamanho
                ? 'bg-mobi-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => onChange(tamanho)}
          >
            {tamanho}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TamanhoSelector;