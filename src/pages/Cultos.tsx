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
        imageUrl="./assets/culto15.webp"
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
              
              <div className="card p-6 border-l-4 border-mobi-accent-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-mobi-accent-100 flex items-center justify-center">
                    <Calendar size={24} className="text-mobi-accent-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">Grupo de Processo</h3>
                    <p className="text-gray-600">18 homens e um segredo</p>
                  </div>
                </div>
                <div className="pl-16">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={18} className="text-mobi-accent-500" />
                    <span className="font-medium">Um Sábado por mês às 19:00</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Reunião mensal dos homens da MOBI, um tempo de conversa, estudo bíblico, louvor e comunhão.
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
                    <h3 className="font-semibold text-xl">Grupo de Processo</h3>
                    <p className="text-gray-600">Essência das Déboras</p>
                  </div>
                </div>
                <div className="pl-16">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={18} className="text-green-500" />
                    <span className="font-medium">Um Sábado por mês às 19:00</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                  Reunião mensal das mulheres da MOBI, um tempo de conversa, estudo bíblico, louvor e comunhão.
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
                    <h3 className="font-semibold text-xl">MOBI FUN</h3>
                    <p className="text-gray-600">Jogos e Comunhão</p>
                  </div>
                </div>
                <div className="pl-16">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={18} className="text-purple-500" />
                    <span className="font-medium">Sábados às 19:00</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Um tempo dedicado comunhão, diversão e interação entre os jovens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-yellow-400">
        <div className="container-custom">
          <SectionTitle 
            title="Eventos Especiais" 
            subtitle="Além dos nossos cultos regulares, realizamos eventos especiais ao longo do ano."
            center
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-xl mb-2 text-mobi-blue-600">Acampa Mobi</h3>
                <p className="text-gray-600 leading-relaxed">
                  Acampamento Mobi, durante o período do carnaval, momentos de louvor, adoração e comunhão
                </p>
              </div>
              
              <div className="card p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-xl mb-2 text-mobi-blue-600">Conferência -</h3>
                <h3 className="font-semibold text-lg mb-2 text-mobi-blue-600">Até que ele venha</h3>
                <p className="text-gray-600 leading-relaxed">
                  Conferência realizada pela MOBI, com palestrantes, louvor e estudo bíblico.
                </p>
              </div>
              
              <div className="card p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-xl mb-2 text-mobi-blue-600">Louvorzão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Louvorzão Mobi, um tempo de louvor, adoração e comunhão entre os jovens e outras igrejas de Paracatu.
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