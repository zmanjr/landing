import React ,{useEffect} from 'react'
import './css/Section1.css'
import vr from '../images/ra.png'
/*import vr_resp from '../images/ra_img_resp.png'*/
import vector1 from '../images/vector1.png'
import Aos from "aos"
import "aos/dist/aos.css";

function Section1() {

  Aos.init({
      duration: 2000
  })
  
  
  return (
    <section className='section1'>
        <div className='vr_section_gradient'>
            
        </div>
        <div className="vr_section">
            <div className = 'vr_section_text'>
                <p className='vr_section_text_titles'>
                    < span className='vr_section_text_titles_title'><span className='vr_section_text_titles_title_pink'>La réalité virtuelle</span> pour réenchanter</span><br />
                    <span className='vr_section_text_titles_subtitle'>les marques mode, beauté et luxe  </span>  
                </p>
                <div className='vr_section_text_content'>
                    <p>
                        La crise sanitaire s’éloigne et les restrictions de moins en moins contraignantes ces derniers temps signent le retour d’expériences shopping ou beauté proches de la normalité. Alors maintenant, qu’est-ce qu’on fait?  
                    </p>
                    <p>
                        Charge aux marques du secteur de se repositionner, et aux agences de marketing évènementiel expertes de la mode, de la beauté et du luxe de les accompagner. Notre Capsul est un outil attractif et propice à l’expérience immersive, où renouer des relations spontanées entre individus et enseignes spécialisées…
                    </p>
                </div>
            </div>
            <div className='vr_section_img'>
                <img src={vr} className='vr_img' alt='vr_img'/>
            </div>
        </div>
        <div className='vr_section_separator'>
           <img src={vector1} className='vr_separator'alt="vr_separator"/>
        </div>
    </section>
  )
}

export default Section1