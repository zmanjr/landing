import React,{useEffect} from 'react'
import './css/Section2.css'
import capsul from '../images/capsul_resp.png'
import vector2 from '../images/vector2.png'
import Aos from 'aos';
import 'aos/dist/aos.css'



function Section2() {
  

  window.addEventListener('scroll',function(){
    const elem = document.querySelector('.capsul');
    const {scrollTop,clientWidth,clientHeight} = this.document.documentElement;
    const topElementToTopViewport = elem.getBoundingClientRect().top;
    if(scrollTop > ((scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.5)){
      let pos = 0;
      let id= setInterval(frame,5);
  
      function frame(){
        if(pos === clientWidth + 30){
            clearInterval(id);
        }else{
          
          pos = pos + 1;
          elem.style.marginLeft = pos + 'px';
          
        }
      }
    }
  });
   
  
  useEffect(() => {
    Aos.init({
        duration: 2000
    })
})
  return (
    <section className='napp_section' id="napp">
        <div className="napp_section_gradient">
        </div>
        <div className='napp_section_titles_text'>
            <div className='napp_section_titles'>
                <span className='napp_section_titles_title'>Faites confiance à notre agence, spécialiste du marketing immersif pour les secteurs</span><br /><span className='napp_section_titles_title_subtitle'>mode, beauté et luxe</span>
            </div>
            <div className='napp_section_text'>
                Bien des choses ont changé, ces derniers temps, dans l’esprit de vos cibles : intérêt grandissant pour la composition des textiles et cosmétiques consommés, rapport à l’image après des mois d’essayages virtuels… 
                Notre Capsul, équipée de dispositifs de réalité virtuelle (VR) et augmentée (RA), permet
            </div>
        </div>


        <div className='napp_section_boxes'>
          <div className='napp_section_box'>
              <p className='napp_section_box_number' data-aos='fade-in'>1</p>
              <p className='napp_section_box_text'>
                Une mise en abîme des matières premières
                de vos produits, de leur origine à leur transformation, grâce à des vidéos enrichies, et à 360 degrés.
              </p>
          </div>
          <div className='napp_section_box'>
              <p className='napp_section_box_number' data-aos='fade-in'>2</p>
              <p className='napp_section_box_text'>
                Un storytelling efficace de l’univers luxe en contextualisant le savoir-faire premium et illustré de A à Z
              </p>
          </div>
          <div className='napp_section_box'>
              <p className='napp_section_box_number' data-aos='fade-in' >3</p>
              <p className='napp_section_box_text'>
                Un accès pour tous aux produits haut-de-gamme et luxueux, grâce à la puissance de la réalité augmentée.
              </p>
          </div>
        </div>
        <div className='napp_section_capsul_container'>
          <img className='capsul' data-aos-once="true" src={capsul} alt="capsul" />
          <img src={vector2} className='napp_section_separator' alt="vector2" />
        </div>
    </section>
        
        
    
  )
}

export default Section2