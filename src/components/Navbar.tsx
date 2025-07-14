import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import MobiLogo from '../../public/assets/MobiLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/80 backdrop-blur-md'
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-40 h-50 overflow-hidden p-3">
              <MobiLogo />
            </div>
          </NavLink>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
              end
            >
              Início
            </NavLink>
            <NavLink
              to="/cultos"
              className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
            >
              Cultos
            </NavLink>
            <NavLink
              to="/localizacao"
              className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
            >
              Localização
            </NavLink>
            <NavLink
              to="/produtos"
              className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
            >
              Produtos
            </NavLink>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-mobi-blue-500 transition-colors"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-60 opacity-100 py-3' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="container-custom space-y-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 px-3 rounded-md ${isActive ? 'bg-mobi-blue-50 text-mobi-blue-600 font-medium' : 'text-gray-700'}`
            }
            onClick={() => setIsOpen(false)}
            end
          >
            Início
          </NavLink>
          <NavLink
            to="/cultos"
            className={({ isActive }) =>
              `block py-2 px-3 rounded-md ${isActive ? 'bg-mobi-blue-50 text-mobi-blue-600 font-medium' : 'text-gray-700'}`
            }
            onClick={() => setIsOpen(false)}
          >
            Cultos
          </NavLink>
          <NavLink
            to="/localizacao"
            className={({ isActive }) =>
              `block py-2 px-3 rounded-md ${isActive ? 'bg-mobi-blue-50 text-mobi-blue-600 font-medium' : 'text-gray-700'}`
            }
            onClick={() => setIsOpen(false)}
          >
            Localização
          </NavLink>
          <NavLink
            to="/produtos"
            className={({ isActive }) =>
              `block py-2 px-3 rounded-md ${isActive ? 'bg-mobi-blue-50 text-mobi-blue-600 font-medium' : 'text-gray-700'}`
            }
            onClick={() => setIsOpen(false)}
          >
            Produtos
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;