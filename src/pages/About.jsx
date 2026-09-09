export default function About() {
  const teamMembers = [
    {
      initials: 'MG',
      roleCategory: 'Dirección & Liderazgo Técnico',
      fullName: 'Mateo Gómez Alvarado',
      position: 'Co-Founder & CEO / Lead Software Engineer',
      description: 'Estrategia tecnológica, arquitectura de software en .NET y dirección técnica de proyectos.'
    },
    {
      initials: 'NG',
      roleCategory: 'Dirección & Gestión Administrativa',
      fullName: 'Natalia Gomez Ortiz',
      position: 'Co-Founder & CEO / Operations Director',
      description: 'Gestión empresarial, operaciones corporativas, finanzas y alianzas estratégicas.'
    },
    {
      initials: 'MV',
      roleCategory: 'Infraestructura, Redes & Seguridad',
      fullName: 'Marcelo Villada Arias',
      position: 'IT Infrastructure, Hardware & Security Specialist',
      description: 'Administración de servidores Linux/Windows, seguridad perimetral, diagnóstico de hardware y asesoría técnica.'
    },
    {
      initials: 'FN',
      roleCategory: 'Desarrollo Full Stack .NET',
      fullName: 'Desarrollador Full Stack .NET',
      position: 'Full Stack .NET Engineer',
      description: 'Construcción de arquitecturas backend con C# / ASP.NET Core, APIs RESTful e interfaces reactivas en React.'
    },
    {
      initials: 'MA',
      roleCategory: 'Desarrollo Full Stack Java',
      fullName: 'Mateo Alzate',
      position: 'Full Stack Java Engineer',
      description: 'Desarrollo integral de microservicios y soluciones empresariales con Spring Boot, integración de APIs y frontend.'
    },
    {
      initials: 'MB',
      roleCategory: 'Desarrollo Móvil (iOS & Android)',
      fullName: 'Especialista Móvil',
      position: 'Mobile App Specialist (iOS & Android)',
      description: 'Desarrollo y publicación de aplicaciones móviles nativas e híbridas de alto rendimiento, optimización UX y consumo de APIs.'
    },
    {
      initials: 'DB',
      roleCategory: 'Bases de Datos & Cloud',
      fullName: 'Administrador de BD',
      position: 'Database Administrator & Cloud Engineer',
      description: 'Modelado relacional, optimización de consultas SQL Server / PostgreSQL y despliegues con Docker.'
    },
    {
      initials: 'QA',
      roleCategory: 'Calidad & Procesos',
      fullName: 'Especialista QA',
      position: 'QA & Software Auditor',
      description: 'Pruebas continuas, aseguramiento de calidad y estándares rigurosos de entrega.'
    }
  ];

  return (
    <div className="container py-5">
      {/* ENCABEZADO PRINCIPAL */}
      <section className="text-center mx-auto mb-5" style={{ maxWidth: 820 }}>
        <span className="badge rounded-pill border border-secondary border-opacity-50 px-3 py-2 text-info bg-dark bg-opacity-75 mb-3">
          <i className="bi bi-buildings-fill me-1"></i> Conoce a TECHNOVO MZL
        </span>
        <h1 className="display-5 fw-bold text-white mb-3 lh-sm">
          Impulsando el futuro digital con ingeniería de software a medida
        </h1>
        <p className="lead text-secondary">
          Somos una empresa especializada en desarrollo de software web y móvil, arquitectura de sistemas, infraestructura en la nube y consultoría en hardware y seguridad IT.
        </p>
      </section>

      {/* PILARES: MISIÓN Y VISIÓN */}
      <section className="row g-4 my-4">
        <div className="col-md-6">
          <div 
            className="p-4 p-lg-5 rounded-4 h-100 border border-secondary border-opacity-25" 
            style={{ background: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(12px)' }}
          >
            <div 
              className="bg-primary bg-opacity-10 text-info rounded-3 d-inline-flex align-items-center justify-content-center mb-4" 
              style={{ width: 52, height: 52 }}
            >
              <i className="bi bi-bullseye fs-3"></i>
            </div>
            <h3 className="fw-bold text-white mb-3">Nuestra Misión</h3>
            <p className="text-secondary leading-relaxed mb-0">
              Proveer soluciones tecnológicas robustas, escalables y seguras que optimicen los procesos operativos de nuestras organizaciones aliadas, garantizando innovación constante y un alto estándar de calidad en cada línea de código e infraestructura física.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div 
            className="p-4 p-lg-5 rounded-4 h-100 border border-secondary border-opacity-25" 
            style={{ background: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(12px)' }}
          >
            <div 
              className="bg-primary bg-opacity-10 text-info rounded-3 d-inline-flex align-items-center justify-content-center mb-4" 
              style={{ width: 52, height: 52 }}
            >
              <i className="bi bi-eye-fill fs-3"></i>
            </div>
            <h3 className="fw-bold text-white mb-3">Nuestra Visión</h3>
            <p className="text-secondary leading-relaxed mb-0">
              Consolidarnos como un referente en consultoría de software multiplataforma, aplicaciones móviles, ciberseguridad e infraestructura tecnológica integral, destacados por la excelencia técnica y el acompañamiento directo.
            </p>
          </div>
        </div>
      </section>

      {/* VALORES FUNDAMENTALES */}
      <section className="py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-white">Nuestros Valores Fundamentales</h2>
          <p className="text-secondary">
            Los principios que guían la forma en que construimos soluciones y nos relacionamos con nuestros clientes.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div 
              className="p-4 rounded-4 text-center h-100 border border-secondary border-opacity-25" 
              style={{ background: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(12px)' }}
            >
              <div 
                className="bg-primary bg-opacity-10 text-info rounded-circle mx-auto d-inline-flex align-items-center justify-content-center mb-3" 
                style={{ width: 60, height: 60 }}
              >
                <i className="bi bi-shield-check fs-2"></i>
              </div>
              <h5 className="fw-bold text-white mb-2">Calidad & Seguridad IT</h5>
              <p className="text-secondary small mb-0">
                Arquitectura limpia, código modular multiplataforma, entornos blindados contra amenazas y respaldo continuo.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div 
              className="p-4 rounded-4 text-center h-100 border border-secondary border-opacity-25" 
              style={{ background: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(12px)' }}
            >
              <div 
                className="bg-primary bg-opacity-10 text-info rounded-circle mx-auto d-inline-flex align-items-center justify-content-center mb-3" 
                style={{ width: 60, height: 60 }}
              >
                <i className="bi bi-lightning-charge-fill fs-2"></i>
              </div>
              <h5 className="fw-bold text-white mb-2">Agilidad & Eficiencia</h5>
              <p className="text-secondary small mb-0">
                Entregas funcionales continuas en entornos web y móviles, diagnóstico preventivo de hardware y automatización.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div 
              className="p-4 rounded-4 text-center h-100 border border-secondary border-opacity-25" 
              style={{ background: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(12px)' }}
            >
              <div 
                className="bg-primary bg-opacity-10 text-info rounded-circle mx-auto d-inline-flex align-items-center justify-content-center mb-3" 
                style={{ width: 60, height: 60 }}
              >
                <i className="bi bi-people-fill fs-2"></i>
              </div>
              <h5 className="fw-bold text-white mb-2">Asesoría & Transparencia</h5>
              <p className="text-secondary small mb-0">
                Acompañamiento técnico personalizado para la toma de decisiones estratégicas en desarrollo de software, apps móviles e infraestructura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN EQUIPO / ROLES */}
      <section className="py-5 my-3">
        <div className="text-center mb-5">
          <span className="badge rounded-pill border border-secondary border-opacity-50 px-3 py-2 text-info bg-dark bg-opacity-75 mb-3">
            Talento Humano
          </span>
          <h2 className="fw-bold text-white">Equipo & Liderazgo Corporativo</h2>
          <p className="text-secondary">Especialistas enfocados en dirección técnica, infraestructura, seguridad, apps móviles y desarrollo multiplataforma.</p>
        </div>

        <div className="row g-4 justify-content-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div 
                className="p-4 rounded-4 h-100 border border-secondary border-opacity-25 d-flex flex-column justify-content-between"
                style={{ background: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(10px)' }}
              >
                {/* Bloque Visual Iniciales */}
                <div 
                  className="rounded-4 mb-4 d-flex align-items-center justify-content-center position-relative overflow-hidden"
                  style={{
                    height: '210px',
                    background: 'radial-gradient(circle at 50% 35%, rgba(59, 130, 246, 0.28) 0%, rgba(124, 58, 237, 0.15) 50%, rgba(10, 15, 26, 0.95) 85%)',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <span 
                    className="fw-bold display-4 text-white-50"
                    style={{ letterSpacing: '0.12em', opacity: 0.4 }}
                  >
                    {member.initials}
                  </span>
                </div>

                {/* Categoría, Nombre y Cargo */}
                <div>
                  <small 
                    className="text-uppercase fw-bold d-block mb-1"
                    style={{ color: '#60a5fa', fontSize: '0.75rem', letterSpacing: '0.06em' }}
                  >
                    {member.roleCategory}
                  </small>
                  <h4 
                    className="fw-bold text-white text-uppercase mb-1"
                    style={{ letterSpacing: '-0.02em', fontSize: '1.25rem' }}
                  >
                    {member.fullName}
                  </h4>
                  <p className="fw-semibold small text-info text-opacity-75 mb-2">
                    {member.position}
                  </p>
                  <p className="text-secondary small mb-0">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STACK TECNOLÓGICO Y CAPACIDADES */}
      <section 
        className="rounded-4 p-4 p-md-5 my-4 text-center border border-secondary border-opacity-25" 
        style={{ background: 'linear-gradient(180deg, rgba(30,41,59,0.5) 0%, rgba(15,23,42,0.8) 100%)' }}
      >
        <h3 className="fw-bold text-white mb-3">Dominio Técnico y Ecosistema de Desarrollo</h3>
        <p className="text-secondary mb-4 mx-auto" style={{ maxWidth: 700 }}>
          Contamos con un stack políglota y moderno para cubrir aplicaciones web, soluciones móviles nativas, servicios cloud y hardware crítico.
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-2 gap-md-3">
          <span className="badge bg-secondary bg-opacity-25 border border-secondary border-opacity-25 text-white px-3 py-2 rounded-pill">.NET 8 / 9 & C#</span>
          <span className="badge bg-secondary bg-opacity-25 border border-secondary border-opacity-25 text-white px-3 py-2 rounded-pill">Java & Spring Boot</span>
          <span className="badge bg-secondary bg-opacity-25 border border-secondary border-opacity-25 text-white px-3 py-2 rounded-pill">Mobile iOS (Swift) & Android (Kotlin)</span>
          <span className="badge bg-secondary bg-opacity-25 border border-secondary border-opacity-25 text-white px-3 py-2 rounded-pill">React & React Native</span>
          <span className="badge bg-secondary bg-opacity-25 border border-secondary border-opacity-25 text-white px-3 py-2 rounded-pill">SQL Server & PostgreSQL</span>
          <span className="badge bg-secondary bg-opacity-25 border border-secondary border-opacity-25 text-white px-3 py-2 rounded-pill">Docker & Compose</span>
          <span className="badge bg-secondary bg-opacity-25 border border-secondary border-opacity-25 text-white px-3 py-2 rounded-pill">Ubuntu Server & Linux</span>
          <span className="badge bg-secondary bg-opacity-25 border border-secondary border-opacity-25 text-white px-3 py-2 rounded-pill">Seguridad IT & Hardening</span>
          <span className="badge bg-secondary bg-opacity-25 border border-secondary border-opacity-25 text-white px-3 py-2 rounded-pill">Hardware & Diagnóstico</span>
        </div>
      </section>
    </div>
  );
}