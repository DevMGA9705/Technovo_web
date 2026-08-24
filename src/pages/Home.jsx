import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-dark text-white min-vh-100 position-relative overflow-hidden" style={{ backgroundColor: '#090d16' }}>
      
      {/* GLOW DE FONDO AMBIENTAL */}
      <div 
        className="position-absolute top-0 start-50 translate-middle-x pointer-events-none"
        style={{
          width: '700px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.25) 0%, rgba(124,58,237,0.15) 50%, transparent 80%)',
          filter: 'blur(80px)',
          zIndex: 0
        }}
      />

      <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
        
        {/* HERO SECTION */}
        <section className="text-center mx-auto pt-5 pb-4" style={{ maxWidth: 880 }}>
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill border border-secondary border-opacity-50 bg-dark bg-opacity-75 mb-4 shadow-sm">
            <span className="spinner-grow spinner-grow-sm text-primary" role="status" style={{ width: 8, height: 8 }}></span>
            <span className="small text-white-50">Ingeniería & Infraestructura Digital</span>
          </div>

          <h1 className="display-3 fw-extrabold tracking-tight mb-4 text-white" style={{ letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Construimos el software y la infraestructura que <span className="text-transparent bg-clip-text" style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>hacen escalar tu negocio</span>.
          </h1>

          <p className="lead text-secondary mb-5 mx-auto" style={{ maxWidth: 650 }}>
            Especialistas en arquitecturas backend en .NET, despliegues contenerizados en la nube y optimización de bases de datos de alto rendimiento.
          </p>

          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-5">
            <Link to="/contacts" className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-semibold shadow-lg">
              Iniciar Proyecto <i className="bi bi-arrow-right ms-2"></i>
            </Link>
            <Link to="/services" className="btn btn-outline-light btn-lg rounded-pill px-4 py-3 fw-semibold border-secondary border-opacity-50">
              Explorar Servicios
            </Link>
          </div>

          {/* BADGES EN LÍNEA */}
          <div className="d-flex flex-wrap justify-content-center gap-4 text-secondary small">
            <span><i className="bi bi-shield-check text-info me-2"></i>Clean Architecture</span>
            <span><i className="bi bi-cpu text-info me-2"></i>Docker & Cloud Native</span>
            <span><i className="bi bi-database text-info me-2"></i>SQL Server Optimizado</span>
          </div>
        </section>

        {/* BENTO GRID: SERVICIOS Y SOLUCIONES */}
        <section className="py-5 my-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-white mb-2">Capacidades & Soluciones</h2>
            <p className="text-secondary small">Diseñado para soportar cargas operativas críticas con máxima estabilidad.</p>
          </div>

          <div className="row g-4">
            
            {/* Bento Card 1: Grande (2 columnas en escritorio) */}
            <div className="col-lg-8">
              <div className="p-4 p-md-5 rounded-4 h-100 border border-secondary border-opacity-25" style={{ background: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(12px)' }}>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3">
                    <i className="bi bi-code-square fs-3"></i>
                  </div>
                  <div>
                    <h4 className="fw-bold mb-0 text-white">Desarrollo Web & APIs de Alta Demanda</h4>
                    <small className="text-secondary">Ecosistema .NET 8 / 9 & C#</small>
                  </div>
                </div>
                <p className="text-secondary mb-4">
                  Desarrollamos soluciones transaccionales robustas con arquitecturas modulares, autenticación segura y optimización para miles de peticiones concurrentes.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-secondary bg-opacity-25 border border-secondary border-opacity-25 text-white-50 px-3 py-2 rounded-pill">REST APIs</span>
                  <span className="badge bg-secondary bg-opacity-25 border border-secondary border-opacity-25 text-white-50 px-3 py-2 rounded-pill">Microservicios</span>
                  <span className="badge bg-secondary bg-opacity-25 border border-secondary border-opacity-25 text-white-50 px-3 py-2 rounded-pill">Workers en Segundo Plano</span>
                </div>
              </div>
            </div>

            {/* Bento Card 2 */}
            <div className="col-lg-4">
              <div className="p-4 p-md-5 rounded-4 h-100 border border-secondary border-opacity-25" style={{ background: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(12px)' }}>
                <div className="bg-primary bg-opacity-10 text-info rounded-3 p-3 d-inline-block mb-3">
                  <i className="bi bi-box-seam fs-3"></i>
                </div>
                <h5 className="fw-bold text-white mb-2">Infraestructura & Docker</h5>
                <p className="text-secondary small mb-0">
                  Despliegues automatizados, entornos Linux Ubuntu Server y aislamiento total por contenedores.
                </p>
              </div>
            </div>

            {/* Bento Card 3 */}
            <div className="col-lg-4">
              <div className="p-4 p-md-5 rounded-4 h-100 border border-secondary border-opacity-25" style={{ background: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(12px)' }}>
                <div className="bg-primary bg-opacity-10 text-warning rounded-3 p-3 d-inline-block mb-3">
                  <i className="bi bi-database-check fs-3"></i>
                </div>
                <h5 className="fw-bold text-white mb-2">Bases de Datos SQL</h5>
                <p className="text-secondary small mb-0">
                  Modelado relacional, indexación avanzada, planes de mantenimiento y alta disponibilidad.
                </p>
              </div>
            </div>

            {/* Bento Card 4 */}
            <div className="col-lg-8">
              <div className="p-4 p-md-5 rounded-4 h-100 border border-secondary border-opacity-25 d-flex flex-column justify-content-between" style={{ background: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(12px)' }}>
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-uppercase fw-bold text-info small"><i className="bi bi-speedometer2 me-1"></i> Performance Metric</span>
                    <span className="badge bg-success bg-opacity-25 text-success border border-success border-opacity-25">99.98% Uptime</span>
                  </div>
                  <h4 className="fw-bold text-white mb-2">Monitoreo & Consultoría Continua</h4>
                  <p className="text-secondary mb-0">
                    Acompañamiento técnico directo para resolver cuellos de botella, optimizar latencias y escalar sistemas en producción.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CTA FINAL ESTILO DARK SAAS */}
        <section className="text-center p-5 rounded-4 border border-secondary border-opacity-25 my-5 position-relative" style={{ background: 'linear-gradient(180deg, rgba(30,41,59,0.5) 0%, rgba(15,23,42,0.8) 100%)' }}>
          <h2 className="display-6 fw-bold text-white mb-3">¿Listo para llevar tu infraestructura al siguiente nivel?</h2>
          <p className="text-secondary mb-4 mx-auto" style={{ maxWidth: 550 }}>
            Agenda una sesión inicial de diagnóstico técnico sin costo para tu empresa.
          </p>
          <Link to="/contacts" className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg">
            Hablar con un Ingeniero
          </Link>
        </section>

      </div>
    </div>
  );
}