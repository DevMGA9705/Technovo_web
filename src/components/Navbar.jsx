import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
      <div className="container py-3">
        <div className="d-flex justify-content-between align-items-center">
          
          {/* BRAND / LOGO */}
          <Link 
            to="/" 
            className="navbar-brand fw-bold d-flex align-items-center gap-2 m-0 text-decoration-none"
            onClick={closeMenu}
          >
            <svg width="34" height="34" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="reactorDarkGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#00F2FE" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#A855F7" />
                </linearGradient>
              </defs>
              <path 
                d="M24 6L40 13V22C40 31.5 33 39.5 24 42C15 39.5 8 31.5 8 22V13L24 6Z"
                stroke="url(#reactorDarkGrad)" 
                strokeWidth="3" 
                strokeLinejoin="round" 
                fill="none" 
              />
              <g>
                <path d="M16 21L13 24L16 27" stroke="#00F2FE" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M32 21L35 24L32 27" stroke="#00F2FE" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M24 16C24 19.5 20.5 24 17 24C20.5 24 28.5 24 31 24C27.5 24 24 19.5 24 16Z" fill="url(#reactorDarkGrad)" />
              </g>
            </svg>
            <span className="fs-5 fw-bold tracking-tight">
              <span className="text-white">TECHNOVO</span> <span style={{ color: '#60a5fa' }}>SAS</span>
            </span>
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