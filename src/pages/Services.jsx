import { Link } from 'react-router-dom';

export default function Services() {
  const serviceCategories = [
    {
      icon: 'bi-window-stack',
      color: '#38bdf8',
      title: 'Desarrollo Web Full Stack (.NET & Java)',
      description: 'Construcción de arquitecturas modulares, microservicios empresariales y plataformas web de alto rendimiento diseñadas para soportar alta demanda transaccional.',
      capabilities: [
        'Ecosistema .NET 8/9, C# y ASP.NET Core',
        'Microservicios con Java & Spring Boot',
        'SPAs reactivas e intuitivas con React',
        'APIs RESTful seguras y escalables'
      ]
    },
    {
      icon: 'bi-phone-flip',
      color: '#818cf8',
      title: 'Desarrollo de Aplicaciones Móviles',
      description: 'Creación de experiencias móviles nativas y multiplataforma fluidas para iOS y Android con integración en tiempo real y consumo optimizado de APIs.',
      capabilities: [
        'Desarrollo nativo (Swift para iOS / Kotlin para Android)',
        'Soluciones multiplataforma híbridas (React Native / Flutter)',
        'Sincronización en segundo plano y modo offline',
        'Publicación y optimización en App Store y Google Play'
      ]
    },
    {
      icon: 'bi-hdd-network',
      color: '#34d399',
      title: 'Administración de Servidores & Cloud',
      description: 'Configuración, virtualización y despliegue de entornos de producción de alta disponibilidad en servidores locales y en la nube.',
      capabilities: [
        'Despliegues automatizados con Docker & Docker Compose',
        'Administración y tuning de Linux (Ubuntu) & Windows Server',
        'Modelado y optimización de SQL Server & PostgreSQL',
        'Balanceo de carga y alta disponibilidad (99.9% Uptime)'
      ]
    },
    {
      icon: 'bi-shield-check',
      color: '#f87171',
      title: 'Seguridad IT & Blindaje Perimetral',
      description: 'Auditoría de vulnerabilidades, configuración de firewalls, políticas de copias de seguridad redundantes y endurecimiento de sistemas frente a incidentes.',
      capabilities: [
        'Hardening de servidores, puertos y credenciales',
        'Estrategias de Disaster Recovery & backups automáticos',
        'Gestión de certificados SSL/TLS y cifrado de datos',
        'Auditorías preventivas de código y puertos abiertos'
      ]
    },
    {
      icon: 'bi-motherboard',
      color: '#fbbf24',
      title: 'Infraestructura, Hardware & Redes',
      description: 'Diagnóstico técnico, mantenimiento preventivo de hardware crítico, montaje de servidores y configuración de redes locales y de acceso remoto.',
      capabilities: [
        'Diagnóstico físico, mantenimiento térmico y ensambles de servidores',
        'Configuración de redes corporativas (LAN, VLAN, Netplan)',
        'Monitoreo de componentes y continuidad operativa',
        'Optimización de infraestructura física de cómputo'
      ]
    },
    {
      icon: 'bi-lightbulb',
      color: '#c084fc',
      title: 'Asesoría y Consultoría Tecnológica',
      description: 'Acompañamiento estratégico para la toma de decisiones clave: modernización de software legado, compra de hardware y dimensionamiento de servidores.',
      capabilities: [
        'Auditoría y diagnóstico de infraestructura existente',
        'Dimensionamiento técnico y reducción de costos operativos',
        'Roadmap para migración digital de procesos',
        'Consultoría continua y soporte técnico empresarial'
      ]
    }
  ];

  const methodologySteps = [
    {
      step: '01',
      title: 'Diagnóstico & Análisis',
      desc: 'Evaluamos requerimientos funcionales, infraestructura actual, seguridad y alcances de negocio.'
    },
    {
      step: '02',
      title: 'Diseño de Arquitectura',
      desc: 'Modelamos esquemas de bases de datos, diagramas de microservicios, UX/UI y topología de red.'
    },
    {
      step: '03',
      title: 'Desarrollo & Hardening',
      desc: 'Implementación con Clean Architecture, Clean Code, estándares de seguridad y pruebas de estrés.'
    },
    {
      step: '04',
      title: 'Despliegue & Monitoreo',
      desc: 'Puesta en producción en servidores cloud/físicos con monitoreo 24/7 y acompañamiento directo.'
    }
  ];

  return (
    <div className="container py-5">
      {/* ENCABEZADO DE PÁGINA */}
      <section className="text-center mx-auto mb-5" style={{ maxWidth: 820 }}>
        <span className="badge rounded-pill border border-secondary border-opacity-50 px-3 py-2 text-info bg-dark bg-opacity-75 mb-3">
          <i className="bi bi-gear-wide-connected me-1"></i> Soluciones Integrales
        </span>
        <h1 className="display-5 fw-bold text-white lh-sm mb-3">
          Ingeniería de Software, Infraestructura y Seguridad de Alto Rendimiento
        </h1>
        <p className="lead text-secondary">
          Diseñamos soluciones tecnológicas robustas que abarcan desde el desarrollo web y móvil hasta la gestión de servidores físicos, redes y blindaje contra vulnerabilidades.
        </p>
      </section>

      {/* GRILLA DE SERVICIOS (6 CARDS EN BENTO GRID DARK) */}
      <section className="row g-4 mb-5">
        {serviceCategories.map((service, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div 
              className="p-4 p-xl-5 rounded-4 h-100 border border-secondary border-opacity-25 d-flex flex-column justify-content-between"
              style={{ background: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(12px)' }}
            >
              <div>
                {/* Icono con Glow */}
                <div 
                  className="rounded-3 d-inline-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: 56,
                    height: 56,
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    color: service.color
                  }}
                >
                  <i className={`bi ${service.icon} fs-3`}></i>
                </div>

                <h4 className="fw-bold text-white mb-3" style={{ fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
                  {service.title}
                </h4>
                
                <p className="text-secondary small mb-4 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Lista de Capacidades */}
              <ul className="list-unstyled text-secondary small mt-auto mb-0 pt-3 border-top border-secondary border-opacity-25">
                {service.capabilities.map((item, idx) => (
                  <li key={idx} className="mb-2 d-flex align-items-start">
                    <i className="bi bi-check2-circle text-info me-2 mt-1"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* METODOLOGÍA DE TRABAJO */}
      <section 
        className="p-4 p-md-5 my-5 rounded-4 border border-secondary border-opacity-25"
        style={{ background: 'rgba(15, 23, 42, 0.45)', backdropFilter: 'blur(10px)' }}
      >
        <div className="text-center mb-5">
          <span className="text-uppercase fw-bold text-info small letter-spacing-1 d-block mb-1">
            Garantía Operativa
          </span>
          <h2 className="fw-bold text-white">Nuestro Ciclo Metodológico</h2>
          <p className="text-secondary small mx-auto" style={{ maxWidth: 580 }}>
            Procesos rigurosos para asegurar escalabilidad, rendimiento y cero caídas en producción.
          </p>
        </div>

        <div className="row g-4 text-center">
          {methodologySteps.map((m, idx) => (
            <div key={idx} className="col-6 col-md-3">
              <div className="p-2">
                <span 
                  className="badge rounded-circle p-3 mb-3 fs-5 shadow-sm"
                  style={{ background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)' }}
                >
                  {m.step}
                </span>
                <h5 className="fw-bold text-white mb-2" style={{ fontSize: '1.1rem' }}>{m.title}</h5>
                <p className="text-secondary small mb-0">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER INFERIOR */}
      <section 
        className="p-5 rounded-4 text-center border border-secondary border-opacity-25 my-5"
        style={{ background: 'linear-gradient(180deg, rgba(30,41,59,0.5) 0%, rgba(15,23,42,0.85) 100%)' }}
      >
        <h2 className="display-6 fw-bold text-white mb-3">¿Listo para transformar tu plataforma tecnológica?</h2>
        <p className="text-secondary mb-4 mx-auto" style={{ maxWidth: 620 }}>
          Solicita una sesión de evaluación técnica sin compromiso con nuestros especialistas en software, redes e infraestructura.
        </p>
        <Link 
          to="/contacts" 
          className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold text-white border-0 shadow-lg"
          style={{ background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)' }}
        >
          Contactar con un Especialista <i className="bi bi-arrow-right ms-2"></i>
        </Link>
      </section>
    </div>
  );
}