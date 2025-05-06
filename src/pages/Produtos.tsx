import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProdutoCard from '../components/ProdutoCard';
import { produtos } from '../data/produtos';

const Produtos: React.FC = () => {
  return (
    <div>
      <Hero 
        title="Nossos Produtos" 
        subtitle="Camisetas e outros itens da MOBI"
        imageUrl="https://images.pexels.com/photos/5872361/pexels-photo-5872361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Camisetas MOBI" 
            subtitle="Vista a camisa da nossa juventude com orgulho! Confira os modelos disponíveis."
            center
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {produtos.map((produto) => (
              <ProdutoCard key={produto.id} produto={produto} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-mobi-blue-600 mb-4">
            Gostou dos nossos produtos?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Ao adquirir nossos produtos, você contribui para os projetos sociais e eventos da MOBI. 
            Sua contribuição é muito importante para mantermos nossas atividades!
          </p>
          <div className="p-8 bg-mobi-blue-50 rounded-lg max-w-3xl mx-auto">
            <h3 className="font-semibold text-xl mb-4">Informações Importantes</h3>
            <ul className="text-left space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-mobi-blue-500 font-bold">•</span>
                <span>Entrega disponível para toda a cidade e região metropolitana.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-mobi-blue-500 font-bold">•</span>
                <span>Pagamento via PIX, transferência bancária ou dinheiro na entrega.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-mobi-blue-500 font-bold">•</span>
                <span>Compras realizadas até quinta-feira serão entregues no sábado seguinte, no culto da MOBI.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-mobi-blue-500 font-bold">•</span>
                <span>Para encomendas especiais ou dúvidas, entre em contato pelo WhatsApp.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Produtos;