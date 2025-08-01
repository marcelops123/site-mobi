import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';

const Localizacao: React.FC = () => {
  return (
    <div>
      <Hero
        title="Nossa Localização"
        subtitle="Saiba como chegar até nós"
        imageUrl="https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <SectionTitle
                title="Como Nos Encontrar"
                subtitle="Estamos localizados em um local de fácil acesso. Venha nos visitar!"
              />

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-mobi-blue-100 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-mobi-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Endereço</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Rua São Vicente, 383<br />
                      Bairro Centro<br />
                      Paracatu - MG<br />
                      CEP: 38600-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-mobi-blue-100 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-mobi-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Telefone</h3>
                    <p className="text-gray-600">
                      (11) 3456-7890
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-mobi-blue-100 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-mobi-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">E-mail</h3>
                    <p className="text-gray-600">
                      contato@mobi.org.br
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-mobi-blue-100 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-mobi-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Horário de Atendimento</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Segunda a Sexta: 9h às 17h<br />
                      Sábado: 9h às 12h<br />
                      Domingo: 9h e 19h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full">
              <div className="sticky top-24">
                <div className="rounded-lg overflow-hidden shadow-md h-[450px] rounded-xl hover:scale-105 transition-transform duration-300">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60975.57508709233!2d-46.8790903!3d-17.2200776!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a84a7407bd74f7%3A0xda15e01de7dfe398!2sIGREJA%20BATISTA%20INDEPENDENTE!5e0!3m2!1spt-BR!2sbr!4v1752467980420!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Igreja"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Localizacao;