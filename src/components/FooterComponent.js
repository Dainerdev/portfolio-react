import React from 'react'

export const FooterComponent = () => {
  return (
    <div>
        <footer class="footer">
          <div id="contact" class="contact">
              <span>Contáctame: <br/></span>
              <a href="mailto:florianarroyo15@gmail.com"><i class='bx bx-mail-send'></i> florianarroyo15@gmail.com</a><br/>
              <span class="copyright">Desarrollado por: DainerDev<i class='bx bx-copyright cp-icon'></i></span>
          </div>
          <div id="redes" class="icon-content">
              <div>
                  <a id="git" href="https://open.spotify.com/user/7rpubuibfdb5ucs4tiljx91qa" class="span-tooltip" 
                      target="_blank" rel="noreferrer noopener" style={{color: '#1DB954'}}>
                      <i class='bx bxl-spotify'></i>
                      <span>Spotify</span>
                  </a>
              </div>
              <div>
                  <a id="git" href="https://github.com/Dainerdev" class="span-tooltip" target="_blank"
                      rel="noreferrer noopener" style={{color: '#24262a'}}>
                      <i class='bx bxl-github'></i>
                      <span>GitHub</span>
                  </a>
              </div>
              <div>
                  <a id="yt" href="https://www.youtube.com/channel/UCmEilB5ED6eFttUs7E88RYQ" class="span-tooltip"
                      target="_blank" rel="noreferrer noopener" style={{color: '#ff0000'}}>
                      <i class='bx bxl-youtube'></i>
                      <span>YouTube</span>
                  </a>
              </div>
              <div>
                  <a id="face" href="https://www.facebook.com/profile.php?id=100091168928807" class="span-tooltip"
                      target="_blank" rel="noreferrer noopener" style={{color: '#1965fc'}}>
                      <i class='bx bxl-facebook-circle'></i>
                      <span>Facebook</span>
                  </a>
              </div>
              <div>
                  <a id="insta" href="https://www.instagram.com/im.astrom/" class="span-tooltip" target="_blank"
                      rel="noreferrer noopener" style={{ color: '#fc199d' }}>
                      <i class='bx bxl-instagram'></i>
                      <span>Instagram</span>
                  </a>
              </div>
              <div>
                  <a id="linkedin" href="https://www.linkedin.com/in/dainer-florian-arroyo-8438772b2" class="span-tooltip"
                      target="_blank" rel="noreferrer noopener" style={{color: '#0274b3'}}>
                      <i class='bx bxl-linkedin-square'></i>
                      <span>LinkedIn</span>
                  </a>
              </div>
          </div>
      </footer>
    </div>
  )
}
