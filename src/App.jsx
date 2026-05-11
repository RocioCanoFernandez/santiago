import React, { useState, useEffect, useRef } from 'react'
import { Phone, Mail, Globe, Instagram, Linkedin, Facebook, Download, ShieldCheck, ChevronRight, MessageCircle } from 'lucide-react'
import './index.css'

function App() {
  const [showCta, setShowCta] = useState(false);
  const linksRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowCta(true);
        } else {
          setShowCta(false);
        }
      },
      { threshold: 0.1 }
    );

    if (linksRef.current) {
      observer.observe(linksRef.current);
    }

    return () => {
      if (linksRef.current) observer.unobserve(linksRef.current);
    };
  }, []);

  const data = {
    name: "Santiago Ruiz Prieto",
    role: "Asesor experto en telecomunicaciones, energía y seguridad",
    slogan: "Quiero unirme a la Kalma",
    email: "santiago@solucionesconkalma.es",
    phone: "646441717",
    phoneUrl: "+34646441717",
    website: "https://solucionesconkalma.es/",
    hubUrl: "https://hub-hub-santiago.npfusf.easypanel.host/",
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
N:;${data.name};;;\nFN:${data.name}
ORG:Soluciones con Kalma
TITLE:${data.role}
TEL;TYPE=WORK,VOICE:${data.phoneUrl}
EMAIL;TYPE=PREF,INTERNET:${data.email}
URL:${data.website}
URL:${data.hubUrl}
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
          <p className="slogan">{data.slogan}</p>
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
          <p className="services-subtext">
            Asesoramiento en telefonía y fibra, luz y gas, y sistemas de seguridad y alarmas.
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

          <a href={data.linkedin} ref={linksRef} target="_blank" rel="noopener noreferrer" className="link-card">
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

      
        {/* Footer SeviAI Ecosystem */}
        <div className="seviai-footer-container">
          <style>{`
            .seviai-footer-container {
              margin-top: 3rem;
              padding: 0 2rem 2rem 2rem;
              display: flex;
              flex-direction: column;
              align-items: center;
              opacity: 0.9;
            }
            .seviai-footer-copyright {
              font-size: 13px;
              text-transform: uppercase;
              letter-spacing: 0.15em;
              font-weight: 600;
              color: rgba(0,0,0,0.5);
              text-align: center;
              margin: 0 0 1.25rem 0;
            }
            .seviai-footer-link {
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.15em;
              font-weight: 800;
              color: rgba(0,0,0,0.7);
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 12px;
              text-decoration: none;
              transition: color 0.3s ease;
              padding: 10px 16px;
            }
            .seviai-footer-logo {
              height: 20px;
              width: auto;
              opacity: 0.7;
              filter: grayscale(100%);
              transition: all 0.3s ease;
            }
            @media (hover: hover) {
              .seviai-footer-link:hover {
                color: #DCAE56;
              }
              .seviai-footer-link:hover .seviai-footer-logo {
                opacity: 1;
                filter: grayscale(0%);
              }
            }
            .seviai-footer-link:active {
              color: #DCAE56;
            }
            .seviai-footer-link:active .seviai-footer-logo {
              opacity: 1;
              filter: grayscale(0%);
            }
          `}</style>
          <p className="seviai-footer-copyright">
            © 2026 Soluciones con Kalma
          </p>
          <a href="https://www.seviai.es/" target="_blank" rel="noopener noreferrer" className="seviai-footer-link">
            SeviAI Ecosystem
            <img src="/logo_sin_fondo.png" alt="SeviAI" className="seviai-footer-logo" />
          </a>
        </div>


      {/* Floating WhatsApp Area */}
      <div className={`floating-whatsapp-wrapper ${showCta ? 'visible' : ''}`}>
        <div className="whatsapp-cta-container">
          <span className="whatsapp-cta-text">¡Únete a la Kalma!</span>
          <svg className="whatsapp-cta-arrow" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 4 Q 16 4, 16 14" />
            <polyline points="11 11 16 16 21 11" />
          </svg>
        </div>
        <a 
          href={`https://wa.me/${data.phoneUrl.replace('+', '')}`}
          target="_blank" 
          rel="noopener noreferrer" 
          className="fab fab-whatsapp"
          aria-label="Contactar por WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default App
