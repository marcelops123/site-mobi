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
                      Rua das Oliveiras, 123<br />
                      Bairro Jardim Esperança<br />
                      Cidade - Estado<br />
                      CEP: 12345-678
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
                      Domingo: Fechado para atendimento administrativo
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium text-lg mb-3">Como Chegar</h3>
                <div className="space-y-3">
                  <p className="text-gray-600 leading-relaxed">
                    <strong>De Ônibus:</strong> As linhas 123, 456 e 789 passam próximo à igreja. 
                    Desça no ponto "Praça Central" e caminhe duas quadras à direita.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>De Carro:</strong> Pela avenida principal, entre à direita na Rua das Oliveiras. 
                    Temos estacionamento gratuito para os visitantes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="h-full">
              <div className="sticky top-24">
                <div className="rounded-lg overflow-hidden shadow-md h-[450px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.3563594431306!2d-43.179168084496355!3d-22.905750985012395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f59a59ea18d%3A0x81a5df6c6cd3c379!2sCatedral%20Metropolitana%20de%20S%C3%A3o%20Sebasti%C3%A3o!5e0!3m2!1sen!2sbr!4v1655384505478!5m2!1sen!2sbr" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Igreja"
                  ></iframe>
                </div>
                <div className="mt-4 p-4 bg-mobi-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    ⚠️ Este é um mapa ilustrativo. Para obter direções precisas, 
                    recomendamos entrar em contato pelo telefone antes da sua visita.
                  </p>
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