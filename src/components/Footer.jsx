import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="text-white pt-5 pb-4 mt-auto border-top"
      style={{
        backgroundColor: '#070a12',
        borderColor: 'rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="container">
        <div className="row gy-4">
          
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold text-white mb-3">
              TECHNOVO <span style={{ color: '#60a5fa' }}>MZL</span>
            </h5>
            <p className="text-secondary small pe-lg-4">
              Ingeniería de software, arquitecturas cloud nativas y consultoría de alto rendimiento tecnológico.
            </p>
            <div className="d-flex gap-2 mt-3">
              <a href="#" className="btn btn-outline-secondary btn-sm rounded-circle p-2 text-white border-secondary border-opacity-50 d-flex align-items-center justify-content-center" style={{ width: 36, height: 36 }}>
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="btn btn-outline-secondary btn-sm rounded-circle p-2 text-white border-secondary border-opacity-50 d-flex align-items-center justify-content-center" style={{ width: 36, height: 36 }}>
                <i className="bi bi-github"></i>
              </a>
              <a href="#" className="btn btn-outline-secondary btn-sm rounded-circle p-2 text-white border-secondary border-opacity-50 d-flex align-items-center justify-content-center" style={{ width: 36, height: 36 }}>
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h6 className="text-uppercase fw-bold text-info small mb-3">Navegación</h6>
            <ul className="list-unstyled text-secondary small">
              <li className="mb-2"><Link to="/" className="text-secondary text-decoration-none">Inicio</Link></li>
              <li className="mb-2"><Link to="/services" className="text-secondary text-decoration-none">Servicios</Link></li>
              <li className="mb-2"><Link to="/about" className="text-secondary text-decoration-none">Nosotros</Link></li>
              <li className="mb-2"><Link to="/contacts" className="text-secondary text-decoration-none">Contacto</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="text-uppercase fw-bold text-info small mb-3">Soluciones</h6>
            <ul className="list-unstyled text-secondary small">
              <li className="mb-2">Desarrollo Web & APIs</li>
              <li className="mb-2">Infraestructura & Docker</li>
              <li className="mb-2">Bases de Datos SQL Server</li>
              <li className="mb-2">Automatización IT</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="text-uppercase fw-bold text-info small mb-3">Contacto</h6>
            <p className="text-secondary small mb-1">
              <i className="bi bi-geo-alt text-info me-1"></i> Manizales, Colombia
            </p>
            <p className="text-secondary small">
              <i className="bi bi-envelope text-info me-1"></i> technovoinfo@technovo-manizales.online
            </p>
          </div>

        </div>

        <div className="border-top mt-4 pt-4 text-secondary small text-center" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          &copy; {currentYear} TECHNOVO MZL. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}