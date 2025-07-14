import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';

const Cultos: React.FC = () => {
  return (
    <div>
      <Hero 
        title="Nossos Cultos" 
        subtitle="Venha participar dos nossos encontros semanais"
        imageUrl="https://images.pexels.com/photos/3875420/pexels-photo-3875420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Horários de Cultos" 
            subtitle="Confira os horários dos nossos cultos e reuniões semanais. Todos são bem-vindos!"
            center
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Culto MOBI */}
              <div className="card p-6 border-l-4 border-mobi-blue-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-mobi-blue-100 flex items-center justify-center">
                    <Calendar size={24} className="text-mobi-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">Culto da MOBI</h3>
                    <p className="text-gray-600">Especial para Jovens</p>
                  </div>
                </div>
                <div className="pl-16">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={18} className="text-mobi-blue-500" />
                    <span className="font-medium">Sábados às 19:30</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Um culto dinâmico e voltado para os jovens, com louvor, 
                    estudo bíblico e momentos de comunhão. Traga seus amigos!
                  </p>
                </div>
              </div>
              
              {/* Culto de Celebração */}
              <div className="card p-6 border-l-4 border-mobi-accent-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-mobi-accent-100 flex items-center justify-center">
                    <Calendar size={24} className="text-mobi-accent-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">Culto de Celebração</h3>
                    <p className="text-gray-600">Para toda a Igreja</p>
                  </div>
                </div>
                <div className="pl-16">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={18} className="text-mobi-accent-500" />
                    <span className="font-medium">Domingos às 18:00</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    O culto principal da igreja, com a participação de todas as 
                    faixas etárias. Momento de adoração e edificação espiritual.
                  </p>
                </div>
              </div>
              
              {/* Estudo Bíblico */}
              <div className="card p-6 border-l-4 border-green-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Calendar size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">Estudo Bíblico</h3>
                    <p className="text-gray-600">Aprofundamento na Palavra</p>
                  </div>
                </div>
                <div className="pl-16">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={18} className="text-green-500" />
                    <span className="font-medium">Quartas às 19:30</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Um momento de estudo mais aprofundado das Escrituras, 
                    com ensino expositivo e oportunidade para perguntas.
                  </p>
                </div>
              </div>
              
              {/* Reunião de Oração */}
              <div className="card p-6 border-l-4 border-purple-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Calendar size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">Reunião de Oração</h3>
                    <p className="text-gray-600">Intercessão e Comunhão</p>
                  </div>
                </div>
                <div className="pl-16">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={18} className="text-purple-500" />
                    <span className="font-medium">Terças às 06:00</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Um tempo dedicado à oração pelos membros da igreja, pelos 
                    trabalhos e projetos, e pelas necessidades da comunidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-orange-300">
        <div className="container-custom">
          <SectionTitle 
            title="Eventos Especiais" 
            subtitle="Além dos nossos cultos regulares, realizamos eventos especiais ao longo do ano."
            center
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-xl mb-2 text-mobi-blue-600">Retiro Anual</h3>
                <p className="text-gray-600 leading-relaxed">
                  Um final de semana especial com os jovens para comunhão, 
                  edificação espiritual e muita diversão.
                </p>
              </div>
              
              <div className="card p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-xl mb-2 text-mobi-blue-600">Congressos</h3>
                <p className="text-gray-600 leading-relaxed">
                  Eventos temáticos com preletores convidados para abordar 
                  assuntos relevantes para os jovens.
                </p>
              </div>
              
              <div className="card p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-xl mb-2 text-mobi-blue-600">Ações Sociais</h3>
                <p className="text-gray-600 leading-relaxed">
                  Projetos para ajudar a comunidade, como distribuição de 
                  alimentos, visitas a asilos e orfanatos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cultos;