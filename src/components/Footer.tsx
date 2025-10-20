import MobiLogoFooter from '../../public/assets/MobiLogoFooter';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-30 h-10 p-1">
              <MobiLogoFooter />
            </div>
            <div>
              <p className="text-sm text-gray-200">Mocidade Batista Independente</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-gray-300 items-center">
              Desenvolvido por <b><a className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://www.linkedin.com/in/marcelo-paix%C3%A3o-43162a203/" target="_blank">Marcelo Paixão
              </a></b>
            </p>
            <p className="text-sm text-gray-300">&copy; {currentYear} - Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;