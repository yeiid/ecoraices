

import './footer.css'

export default function Footer() {
  return (
    <>
      <section className='footer'>
        <div>
          <span style={{ color: 'var(--black)', fontSize: 'var(--md)' }}>
            Create by: Yeifran Hernandez
          </span>
          <h2 style={{ color: 'var(--black)', fontSize: 'var(--md)' }}>
            Contacto:
            <br />
            Wapp: 3024679060
          </h2>
          <div className="social-links">
            {/* Agrega enlaces a tus redes sociales */}
            <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            {/* Agrega más enlaces según tus necesidades */}
          </div>
        </div>
      </section>
    </>
  );
}

