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
                    <h3 className="font-semibold text-xl">MOBILIZA</h3>
                    <p className="text-gray-600">Culto de Celebração</p>
                  </div>
                </div>
                <div className="pl-16">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={22} className="text-mobi-blue-500" />
                    <span className="font-medium">1º Sábado de cada mês às 19h30 na IBI</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    O MOBILIZA é o culto principal da MOBI, inauguramos a cada primeiro sábado do mês, um tempo de adoração, Palavra e comunhão.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-2">
                    É o momento em que celebramos juntos tudo o que Deus tem feito, somos edificados pela verdade do Evangelho e desafiados a viver uma fé autêntica e relevante
                  </p>
                </div>
              </div>

              <div className="card p-6 border-l-4 border-mobi-accent-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-mobi-accent-100 flex items-center justify-center">
                    <Calendar size={24} className="text-mobi-accent-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">18 homens e um segredo</h3>
                    <p className="text-gray-600">Grupo de processo</p>
                  </div>
                </div>
                <div className="pl-16">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={22} className="text-mobi-accent-500" />
                    <span className="font-medium">2º Sábado de Cada mês às 19h30 na casa do Eliabe</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Este é um grupo exclusivo para os rapazes da MOBI — um ambiente de crescimento, onde somos moldados pelo caráter de Cristo, através da vulnerabilidade e discipulado. Aqui, falamos sobre propósito, identidade e pureza, enfrentando juntos os desafios da vida cristã masculina.
                  </p>
                  <p className='text-gray-600 leading-relaxed mt-2'>
                    O “segredo” não é esconder, mas curar e fortalecer, permitindo que o Espírito Santo transforme o interior antes de qualquer exterior
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
                    <h3 className="font-semibold text-xl">Essência das Déboras</h3>
                    <p className="text-gray-600">Grupo de processo</p>
                  </div>
                </div>
                <div className="pl-16">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={22} className="text-green-500" />
                    <span className="font-medium">2º sábado de cada mês as 19h30 na casa da Sarah</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    O Essência das Déboras é um grupo voltado para as jovens mulheres da MOBI, inspirado na força e sensibilidade de Débora, mulher de fé e coragem.
                  </p>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    Aqui, falamos sobre identidade, emoções, propósito e feminilidade segundo o coração de Deus. É um espaço de cura, encorajamento e crescimento espiritual, onde cada uma descobre o seu valor e papel no Reino
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
                    <Clock size={22} className="text-purple-500" />
                    <span className="font-medium">Terceiro sábado de cada mês às 19:00</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    O MOBI FUN é o nosso culto de comunhão — um momento leve, criativo e cheio de vida! Através de dinâmicas, brincadeiras, jogos, música e boas risadas, fortalecemos nossos laços como família da fé.
                  </p>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    Mais do que diversão, é um tempo para viver o amor de Cristo de forma prática e descontraída, celebrando a unidade do corpo
                  </p>
                </div>
              </div>

              <div className="card p-6 border-l-4 border-red-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Calendar size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">No Secreto</h3>
                    <p className="text-gray-600">Culto de Oração</p>
                  </div>
                </div>
                <div className="pl-16">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={22} className="text-purple-500" />
                    <span className="font-medium">4º sábado de cada mês as 19h30 na IBI</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    O No Secreto é o coração pulsante da MOBI — um culto de rendição, intercessão e intimidade com o Pai
                  </p>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    É o momento em que paramos tudo para buscar a face de Deus, não por resultados, mas por relacionamento.
                  </p>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    Cremos que é no secreto que nascem os maiores moveres e os verdadeiros avivamentos
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
                <h3 className="font-semibold text-lg mb-2 text-mobi-blue-600">Até que Ele venha</h3>
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