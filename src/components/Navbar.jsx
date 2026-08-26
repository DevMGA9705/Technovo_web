import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className="sticky-top border-bottom"
      style={{
        backgroundColor: 'rgba(9, 13, 22, 0.85)',
        backdropFilter: 'blur(16px)',
        borderColor: 'rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="container py-2">
        <div className="d-flex justify-content-between align-items-center">
          
          {/* BRAND / LOGO OFICIAL */}
          <Link 
            to="/" 
            className="navbar-brand d-flex align-items-center m-0 text-decoration-none"
            onClick={closeMenu}
          >
            <img 
              src={logoImg} 
              alt="Technovo SAS" 
              height="38" 
              className="d-inline-block align-text-top"
              style={{ objectFit: 'contain' }}
            />
          </Link>

          {/* ENLACES ESCRITORIO */}
          <nav className="d-none d-md-flex align-items-center gap-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `small fw-semibold text-decoration-none transition-all ${isActive ? 'text-white' : 'text-secondary hover-text-white'}`
              }
            >
              Inicio
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `small fw-semibold text-decoration-none transition-all ${isActive ? 'text-white' : 'text-secondary hover-text-white'}`
              }
            >
              Servicios
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `small fw-semibold text-decoration-none transition-all ${isActive ? 'text-white' : 'text-secondary hover-text-white'}`
              }
            >
              Nosotros
            </NavLink>
            <Link 
              to="/contacts" 
              className="btn btn-sm rounded-pill px-4 py-2 fw-semibold text-white border-0 shadow-sm ms-2"
              style={{ background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)' }}
            >
              Contacto <i className="bi bi-arrow-right-short ms-1"></i>
            </Link>
          </nav>

          {/* BOTÓN MÓVIL HAMBURGUESA */}
          <button 
            type="button"
            className="btn btn-outline-secondary d-md-none border-secondary border-opacity-50 rounded-3 p-2 text-white"
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            <i className="bi bi-list fs-4"></i>
          </button>

        </div>

        {/* MENÚ MÓVIL */}
        {isMenuOpen && (
          <div 
            className="d-md-none border rounded-4 mt-3 p-3"
            style={{ backgroundColor: '#0f172a', borderColor: 'rgba(255,255,255,0.1)' }}
          >
            <div className="d-flex flex-column gap-2">
              <NavLink 
                to="/" 
                className="nav-link text-white fw-semibold py-2 px-3 rounded-3"
                onClick={closeMenu}
              >
                Inicio
              </NavLink>
              <NavLink 
                to="/services" 
                className="nav-link text-white fw-semibold py-2 px-3 rounded-3"
                onClick={closeMenu}
              >
                Servicios
              </NavLink>
              <NavLink 
                to="/about" 
                className="nav-link text-white fw-semibold py-2 px-3 rounded-3"
                onClick={closeMenu}
              >
                Nosotros
              </NavLink>
              <Link 
                to="/contacts" 
                className="btn btn-primary rounded-pill py-2 mt-2 w-100 fw-semibold"
                onClick={closeMenu}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}