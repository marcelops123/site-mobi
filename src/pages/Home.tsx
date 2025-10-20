import { Calendar, MapPin, Users } from 'lucide-react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
const Home: React.FC = () => {

  return (
    <div>
      <Hero
        title="MOBI - Mocidade Batista Independente"
        subtitle="Jovens unidos para fazer a diferença na igreja e na sociedade"
        imageUrl="./assets/bg-retiro.webp"
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
        rewindWithAnimation={true}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        draggable={false}
        slidesToSlide={1}
        swipeable={true}
      >
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src='./assets/culto3.webp'></img>
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src='./assets/culto2.webp'></img>
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src='./assets/culto6.webp'></img>
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src='./assets/culto11.webp'></img>
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src='./assets/culto10.webp'></img>
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src='./assets/culto9.webp'></img>
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src='./assets/culto15.webp'></img>
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src='./assets/culto5.webp'></img>
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src='./assets/culto7.webp'></img>
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src='./assets/culto8.webp'></img>
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src='./assets/culto12.webp'></img>
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src='./assets/culto13.webp'></img>
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src='./assets/culto14.webp'></img>
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
                <MapPin size={28} className="text-mobi-blue-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Missão</h3>
              <p className="text-gray-600">
                <div>
                  <h3>Crescer em Cristo. Inspirar pelo exemplo. Transformar nossa geração.</h3>
                </div>
                <br></br>
                <div>
                  <h3>Queremos ser jovens apaixonados pela Palavra, vivendo com propósito e refletindo Jesus em cada atitude — na palavra, no amor, na fé e na pureza</h3>
                </div>
                <p className='p-1 text-gray-600'>
                  — 1 Timóteo 4:12
                </p>
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-200 flex items-center justify-center mx-auto mb-4">
                <Users size={28} className="text-mobi-blue-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Visão</h3>

              <p className="text-gray-600">
                Ser uma geração relevante, firmada em Cristo e movida pelo Espírito Santo.
              </p>
              <p className='mt-2 text-gray-600'>
                Sonhamos com uma juventude que vive o Evangelho de forma autêntica, influencia a sociedade com esperança e manifesta a glória de Deus em tudo o que faz
              </p>
              <p className='mt-3 text-gray-600'>
                — 1 Pedro 2:9
              </p>
            </div>


            <div className="card p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-200 flex items-center justify-center mx-auto mb-4">
                <Calendar size={28} className="text-mobi-blue-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Comunhão</h3>
              <p className="text-gray-600">
                Crescer juntos é o nosso estilo de vida.
              </p>
              <p className='p-3 text-gray-600'>
                Somos uma família de fé. Valorizamos o tempo juntos, o cuidado mútuo e a unidade que nos fortalece para cumprir o chamado de Deus.
              </p>
              <p className='text-gray-600'>
                - Salmos 133:1
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