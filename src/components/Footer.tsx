import MobiLogo from '../../public/assets/MobiLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white p-1">
              <MobiLogo />
            </div>
            <div>
              <h3 className="font-bold text-xl">MOBI</h3>
              <p className="text-sm text-gray-400">Mocidade Batista Independente</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-gray-400 items-center">
              Feito por <b>Marcelo Paixão</b> para a juventude MOBI
            </p>
            <p className="text-sm text-gray-400">&copy; {currentYear} - Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;