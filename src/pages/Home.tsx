import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
const Home: React.FC = () => {




  return (
    <div>
      <Hero
        title="MOBI - Mocidade Batista Independente"
        subtitle="Jovens unidos para fazer a diferença na igreja e na sociedade."
        imageUrl="./assets/bg-retiro.jpeg"
      />





      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className='h-80 mt-3 rounded-xl overflow-hidden'
        containerClass="container-with-dots"
        dotListClass=""
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover={false}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 2000,
              min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        draggable={false}
        slidesToSlide={1}
        swipeable={false}
      >
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src='./assets/culto3.JPG'></img>
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src='./assets/culto2.JPG'></img>
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src='./assets/culto6.JPG'></img>
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src='./assets/culto11.JPG'></img>
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src='./assets/culto10.JPG'></img>
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src='./assets/culto9.JPG'></img>
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src='./assets/culto15.JPG'></img>
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src='./assets/culto5.JPG'></img>
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src='./assets/culto7.JPG'></img>
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src='./assets/culto8.JPG'></img>
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src='./assets/culto12.JPG'></img>
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src='./assets/culto13.JPG'></img>
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src='./assets/culto14.JPG'></img>
      </Carousel>
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Quem Somos"
            center
          />

          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Nós somos a <strong>MOBI - Mocidade Batista Independente</strong> e fazemos parte da Igreja Batista Independente de Paracatu.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Somos um ministério relevante que busca crescer constantemente no conhecimento de Cristo por meio da Palavra. Nosso objetivo é ser exemplo para os fiéis na palavra, no procedimento, no amor, na fé e na pureza (1Tm 4:12).
            </p>
            <p className="text-gray-700 leading-relaxed">
              Somos impulsionados pelo amor a Cristo, dedicando a nossa mocidade para o louvor de Sua glória, pois entendemos que, mesmo jovens, somos uma geração escolhida e sedenta por Jesus.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Venha fazer parte deste tempo e desta geração. Venha avançar conosco!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Nossos Valores"
            center
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-200 flex items-center justify-center mx-auto mb-4">
                <Users size={28} className="text-mobi-blue-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Comunhão</h3>
              <p className="text-gray-600">
                Valorizamos a amizade, o companheirismo e o suporte mútuo entre os jovens, criando laços que vão além das reuniões semanais.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-200 flex items-center justify-center mx-auto mb-4">
                <Calendar size={28} className="text-mobi-blue-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Compromisso</h3>
              <p className="text-gray-600">
                Encorajamos o compromisso com Deus, com a Palavra e com a igreja, buscando coerência entre fé e prática no dia a dia.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-200 flex items-center justify-center mx-auto mb-4">
                <MapPin size={28} className="text-mobi-blue-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Missão</h3>
              <p className="text-gray-600">
                Acreditamos na importância de compartilhar o evangelho e fazer diferença na comunidade através de ações práticas e testemunho.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-yellow-400 text-white">
        <div className="container-custom text-center">
          <SectionTitle title='Venha nos Conhecer' />
          <p className="max-w-2xl text-neutral-900 font-medium mx-auto mb-8 leading-relaxed">
            Junte-se a nós nas nossas reuniões semanais e faça parte desta família. Temos um lugar especial para você!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/cultos" className="btn bg-white text-mobi-blue-600 hover:bg-gray-100">
              Horários dos Cultos
            </a>
            <a href="/localizacao" className="btn bg-mobi-accent-500 text-white hover:bg-mobi-accent-600">
              Como Chegar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;