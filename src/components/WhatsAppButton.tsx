import React from 'react';
import { Send } from 'lucide-react';

interface WhatsAppButtonProps {
  telefone: string;
  mensagem: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ telefone, mensagem }) => {
  const handleClick = () => {
    const numeroFormatado = telefone.replace(/\D/g, '');
    const mensagemFormatada = encodeURIComponent(mensagem);
    const url = `https://wa.me/${numeroFormatado}?text=${mensagemFormatada}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="btn btn-primary w-full py-3 text-lg"
    >
      <Send size={20} className="mr-2" />
      Comprar via WhatsApp
    </button>
  );
};

export default WhatsAppButton;