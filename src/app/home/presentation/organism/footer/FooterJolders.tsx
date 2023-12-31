
import IconFacebook from '@/components/atoms/icon_facebook/IconFacebook'
import { FooterJoldersProps } from './FooterJolders.Props'
import './footerJolders.scss'
import IconTwitter from '@/components/atoms/icon_twitter/IconTwitter'
import IconInstagram from '../../../../../components/atoms/icon_instagram/IconInstagram';

const FooterJolders = ({ image, name,  }: FooterJoldersProps) => {
  return (
	<footer className="footer">
  

  <div className="footer__logo">

 <div className='center_logo'>
  <img src={image} alt={`${name}'Logo jolders`} />
 </div>

  <section className='footer-paragraph'>
 <p>Discover what’s possible when a community creates together.</p>
 </section>
 {/* <input type="text" className="footer__input" placeholder="Enter your email address" />
 <button type="submit" value="" className='botton-submit'></button> */}
  </div>

<section>


  <section className="footer__menus">
    <div className="footer__menu">
      <h3 className="footer__menu-title">Empresa</h3>
      <ul className="footer__menu-items">
        <li><a href="#">Términos y Condiciones</a></li>
        <li><a href="#">Políticas Cookies</a></li>
        <li><a href="#">Fraude | Devoluciones</a></li>
        <li><a href="#">Conducta</a></li>
      </ul>
    </div>

    <div className="footer__menu">
      <h3 className="footer__menu-title">Ayuda</h3>
      <ul className="footer__menu-items">
        <li><a href="#">#SoyStartup</a></li>
        <li><a href="#">#SoyInversor</a></li>
        <li><a href="#">Pódcast</a></li>
        <li><a href="#">MetaLand</a></li>
      </ul>
    </div>
    <div className="footer__menu">
      <h3 className="footer__menu-title">Alianzas</h3>
      <ul className="footer__menu-items">
        <li><a href="#">Partners</a></li>
        <li><a href="#">#SoyAceleradora</a></li>
        <li><a href="#">Webmail</a></li>
      </ul>
    </div>
    <div className="footer__menu">
      <h3 className="footer__menu-title">RRSS</h3>
      <ul className="footer__menu-items">
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Discord</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Crunchbase</a></li>
        <li><a href="#">Intranet</a></li>
      </ul>
    </div>  
  </section>

  <section className='icon-redes' >
   <IconFacebook width={40} height={40} color='white'/>
   <IconTwitter width={40} height={40} color='white'/>
   <IconInstagram width={41} height={41} color='white'/>
  </section>

  </section>
  

</footer>

  )
}

export default FooterJolders


