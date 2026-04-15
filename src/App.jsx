import React from 'react'
import { Phone, Mail, Globe, Instagram, Linkedin, Facebook, Download, ShieldCheck, ChevronRight, MessageCircle } from 'lucide-react'
import './index.css'

function App() {
  const data = {
    name: "Santiago Ruiz Prieto",
    role: "Asesor experto en telecomunicaciones, energía y seguridad",
    slogan: "Quiero unirme a la Kalma",
    email: "santiago@solucionesconkalma.es",
    phone: "646441717",
    phoneUrl: "+34646441717",
    website: "https://solucionesconkalma.es/",
    instagram: "https://www.instagram.com/solucionesconkalmasl?igsh=MTVwNWQ5ZW0wOXR0ZA%3D%3D&utm_source=qr",
    linkedin: "https://www.linkedin.com/in/santiago-ruiz-prieto/",
    facebook: "https://www.facebook.com/share/17Nq3Xv7HM/?mibextid=wwXIfr",
    logoUrl: "/logo - soluciones con kalma.png",
    profileImgUrl: "/santiago.jpeg",
    bgOverlayUrl: "/fondo.png",
    seviaiLogoUrl: "/logo_sin_fondo.png"
  }

  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${data.name}
ORG:Soluciones con Kalma
TITLE:${data.role}
TEL;TYPE=WORK,VOICE:${data.phoneUrl}
EMAIL;TYPE=PREF,INTERNET:${data.email}
URL:${data.website}
END:VCARD`;

  const handleDownloadVCard = () => {
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'santiago_ruiz_prieto.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hub-container">
      {/* VCard Button at Top Right */}
      <button onClick={handleDownloadVCard} className="vcard-btn-floating" title="Guardar contacto" aria-label="Guardar contacto">
        <Download size={22} />
      </button>

      {/* Hero Header */}
      <header className="hero">
        <div 
          className="hero-overlay" 
          style={{ backgroundImage: `url('${data.bgOverlayUrl}')` }}
        ></div>
        
        <div className="hero-content">
          <div className="logo-container">
            <img 
              src={data.logoUrl} 
              alt="Soluciones con Kalma" 
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<h2 style="font-weight: 800; letter-spacing: 1px; color: var(--accent-cyan);">Soluciones con Kalma</h2>';
              }} 
            />
          </div>
          
          <h1 className="name">{data.name}</h1>
          <p className="role">{data.role}</p>
          <p className="slogan">"{data.slogan}"</p>
        </div>
      </header>

      {/* Profile Area */}
      <section className="profile-section">
        <div className="profile-img-container">
          <img loading="lazy" src={data.profileImgUrl} alt={data.name} className="profile-img" onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Santiago+Ruiz&background=12C7CF&color=fff&size=200' }} />
        </div>
      </section>

      {/* Quick Contact Badges */}
      <div className="contact-badges">
        <a href={`tel:${data.phoneUrl}`} className="badge">
          <Phone size={18} />
          <span>{data.phone}</span>
        </a>
        <a href={`mailto:${data.email}`} className="badge">
          <Mail size={18} />
          <span>{data.email}</span>
        </a>
      </div>

      <main className="content">
        
        {/* Services Resume */}
        <div className="services-card">
          <h3 className="services-title">
            <ShieldCheck size={20} />
            Nuestros Servicios
          </h3>
          <p className="services-text">
            Buscamos y gestionamos la mejor solución del mercado para cada caso, con un acompañamiento continuo y totalmente personalizado. Sin coste ni compromiso.
          </p>
        </div>

        {/* Links */}
        <h3 className="section-title">Presencia Digital</h3>
        <div className="links-container">
          <a href={data.website} target="_blank" rel="noopener noreferrer" className="link-card">
            <div className="link-card-left">
              <div className="link-icon-container">
                <Globe size={20} />
              </div>
              <span>Web Corporativa</span>
            </div>
            <ChevronRight size={20} className="link-arrow" />
          </a>
          
          <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="link-card">
            <div className="link-card-left">
              <div className="link-icon-container">
                <Instagram size={20} />
              </div>
              <span>Instagram</span>
            </div>
            <ChevronRight size={20} className="link-arrow" />
          </a>

          <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="link-card">
            <div className="link-card-left">
              <div className="link-icon-container">
                <Linkedin size={20} />
              </div>
              <span>LinkedIn</span>
            </div>
            <ChevronRight size={20} className="link-arrow" />
          </a>

          <a href={data.facebook} target="_blank" rel="noopener noreferrer" className="link-card">
            <div className="link-card-left">
              <div className="link-icon-container">
                <Facebook size={20} />
              </div>
              <span>Facebook</span>
            </div>
            <ChevronRight size={20} className="link-arrow" />
          </a>
        </div>

      </main>

      {/* SeviAI Ecosystem Footer */}
      <div className="seviai-footer" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '0.5rem',
        padding: '1.5rem', 
        marginTop: '1rem', 
        paddingBottom: '5rem',
        opacity: 0.6,
        fontSize: '0.7rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontWeight: '600',
        color: 'var(--text-muted)',
        flexWrap: 'wrap'
      }}>
        <p>© 2026 Soluciones con Kalma</p>
        <div style={{ width: '1px', height: '12px', backgroundColor: 'var(--border-gray)' }}></div>
        <p style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          SeviAI Ecosystem
          <img src={data.seviaiLogoUrl} alt="SeviAI" style={{ height: '12px', opacity: 0.8, filter: 'grayscale(100%)' }} />
        </p>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="floating-actions">
        <a 
          href={`https://wa.me/${data.phoneUrl.replace('+', '')}`}
          target="_blank" 
          rel="noopener noreferrer" 
          className="fab fab-whatsapp"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </div>
  )
}

export default App
