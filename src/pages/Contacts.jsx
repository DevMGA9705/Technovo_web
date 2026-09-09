import { useState } from 'react';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio.';
    if (!formData.email.trim()) newErrors.email = 'El correo es obligatorio.';
    if (!formData.subject.trim()) newErrors.subject = 'El asunto es obligatorio.';
    if (!formData.message.trim()) newErrors.message = 'El mensaje no puede estar vacío.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSuccessMessage('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccessMessage('¡Mensaje enviado con éxito! Nos comunicaremos contigo en breve.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setErrors({});
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="text-center mx-auto mb-5" style={{ maxWidth: 680 }}>
        <span className="badge rounded-pill border border-secondary border-opacity-50 px-3 py-2 text-info bg-dark bg-opacity-75 mb-3">
          <i className="bi bi-chat-dots-fill me-1"></i> Contacto Directo
        </span>
        <h1 className="display-5 fw-bold text-white lh-sm mb-3">Hablemos de tu proyecto</h1>
        <p className="lead text-secondary">
          Desarrollo de software a medida, arquitectura de sistemas y optimización Cloud.
        </p>
      </div>

      <div className="row g-4 g-lg-5">
        {/* INFO DIRECTA */}
        <div className="col-lg-5">
          <div className="p-4 p-md-5 rounded-4 border border-secondary border-opacity-25 h-100 d-flex flex-column justify-content-between" style={{ background: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(12px)' }}>
            <div>
              <h4 className="fw-bold mb-4 text-white">Canales Oficiales</h4>

              <div className="d-flex align-items-start mb-4">
                <div className="bg-primary bg-opacity-10 text-info rounded-3 p-3 me-3 fs-4 d-flex align-items-center justify-content-center" style={{ width: 50, height: 50 }}>
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-white">Ubicación</h6>
                  <p className="text-secondary small mb-0">Manizales, Colombia</p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <div className="bg-primary bg-opacity-10 text-info rounded-3 p-3 me-3 fs-4 d-flex align-items-center justify-content-center" style={{ width: 50, height: 50 }}>
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-white">Correo Electrónico</h6>
                  <p className="text-secondary small mb-0 text-break">technovoinfo@technovo-manizales.online</p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <div className="bg-primary bg-opacity-10 text-info rounded-3 p-3 me-3 fs-4 d-flex align-items-center justify-content-center" style={{ width: 50, height: 50 }}>
                  <i className="bi bi-clock-fill"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-white">Disponibilidad</h6>
                  <p className="text-secondary small mb-0">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                  <span className="badge bg-success bg-opacity-25 text-success border border-success border-opacity-25 mt-1">Soporte 24/7</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-top border-secondary border-opacity-25">
              <h6 className="fw-bold mb-1 text-white">TECHNOVO-MZL</h6>
              <p className="text-secondary small mb-0">Ingeniería que escala tu negocio.</p>
            </div>
          </div>
        </div>

        {/* FORMULARIO */}
        <div className="col-lg-7">
          <div className="p-4 p-md-5 rounded-4 border border-secondary border-opacity-25" style={{ background: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(12px)' }}>
            <h4 className="fw-bold mb-2 text-white">Envíanos un mensaje</h4>
            <p className="text-secondary small mb-4">Recibirás respuesta en menos de 24 horas hábiles.</p>

            {successMessage && (
              <div className="alert alert-success bg-success bg-opacity-25 text-white border-success border-opacity-50 rounded-3 mb-4">
                <i className="bi bi-check-circle-fill me-2 text-success"></i> {successMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label text-secondary small">Nombre Completo *</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control bg-dark text-white border-secondary border-opacity-50 rounded-3"
                    placeholder="Ej: Juan Pérez"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <small className="text-danger">{errors.name}</small>}
                </div>

                <div className="col-md-6">
                  <label className="form-label text-secondary small">Correo Electrónico *</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control bg-dark text-white border-secondary border-opacity-50 rounded-3"
                    placeholder="correo@empresa.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>

                <div className="col-md-6">
                  <label className="form-label text-secondary small">Teléfono / WhatsApp</label>
                  <input
                    name="phone"
                    type="text"
                    className="form-control bg-dark text-white border-secondary border-opacity-50 rounded-3"
                    placeholder="+57 300 000 0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label text-secondary small">Asunto *</label>
                  <input
                    name="subject"
                    type="text"
                    className="form-control bg-dark text-white border-secondary border-opacity-50 rounded-3"
                    placeholder="Ej: Cotización de Sistema"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && <small className="text-danger">{errors.subject}</small>}
                </div>

                <div className="col-12">
                  <label className="form-label text-secondary small">Mensaje *</label>
                  <textarea
                    name="message"
                    rows="4"
                    className="form-control bg-dark text-white border-secondary border-opacity-50 rounded-3"
                    placeholder="Cuéntanos brevemente sobre tu proyecto..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <small className="text-danger">{errors.message}</small>}
                </div>

                <div className="col-12 mt-4">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg w-100 fw-bold rounded-3 shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)', border: 'none' }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}