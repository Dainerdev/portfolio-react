import React from 'react';
import './FooterComponent.css';

export const FooterComponent = () => {
  return (
    <div>
        <footer className="footer">
          <div id="contact" className="contact">
              <span>Contáctame: <br/></span>
              <a href="mailto:florianarroyo15@gmail.com"><i className='bx bx-mail-send'></i> florianarroyo15@gmail.com</a><br/>
              <span className="copyright">Desarrollado por: DainerDev<i className='bx bx-copyright cp-icon'></i></span>
          </div>
          <div id="redes" className="icon-content">
              <div>
                  <a id="git" href="https://open.spotify.com/user/7rpubuibfdb5ucs4tiljx91qa" className="span-tooltip" 
                      target="_blank" rel="noreferrer noopener" style={{color: '#1DB954'}}>
                      <i className='bx bxl-spotify'></i>
                      <span>Spotify</span>
                  </a>
              </div>
              <div>
                  <a id="git" href="https://github.com/Dainerdev" className="span-tooltip" target="_blank"
                      rel="noreferrer noopener" style={{color: '#24262a'}}>
                      <i className='bx bxl-github'></i>
                      <span>GitHub</span>
                  </a>
              </div>
              <div>
                  <a id="yt" href="https://www.youtube.com/channel/UCmEilB5ED6eFttUs7E88RYQ" className="span-tooltip"
                      target="_blank" rel="noreferrer noopener" style={{color: '#ff0000'}}>
                      <i className='bx bxl-youtube'></i>
                      <span>YouTube</span>
                  </a>
              </div>
              <div>
                  <a id="face" href="https://www.facebook.com/profile.php?id=100091168928807" className="span-tooltip"
                      target="_blank" rel="noreferrer noopener" style={{color: '#1965fc'}}>
                      <i className='bx bxl-facebook-circle'></i>
                      <span>Facebook</span>
                  </a>
              </div>
              <div>
                  <a id="insta" href="https://www.instagram.com/im.astrom/" className="span-tooltip" target="_blank"
                      rel="noreferrer noopener" style={{ color: '#fc199d' }}>
                      <i className='bx bxl-instagram'></i>
                      <span>Instagram</span>
                  </a>
              </div>
              <div>
                  <a id="linkedin" href="https://www.linkedin.com/in/dainer-florian-arroyo-8438772b2" className="span-tooltip"
                      target="_blank" rel="noreferrer noopener" style={{color: '#0274b3'}}>
                      <i className='bx bxl-linkedin-square'></i>
                      <span>LinkedIn</span>
                  </a>
              </div>
          </div>
      </footer>
    </div>
  )
}
