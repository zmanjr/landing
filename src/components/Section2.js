import React from 'react'
import './css/Section2.css'
import capsul from '../images/capsul_resp.png'
import vector2 from '../images/vector2.png'


function Section2() {
  return (
    <section className='napp_section'>
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
              <p className='napp_section_box_number'>1</p>
              <p className='napp_section_box_text'>
                Une mise en abîme des matières premières
                de vos produits, de leur origine à leur transformation, grâce à des vidéos enrichies, et à 360 degrés.
              </p>
          </div>
          <div className='napp_section_box'>
              <p className='napp_section_box_number'>2</p>
              <p className='napp_section_box_text'>
                Un storytelling efficace de l’univers luxe en contextualisant le savoir-faire premium et illustré de A à Z
              </p>
          </div>
          <div className='napp_section_box'>
              <p className='napp_section_box_number'>3</p>
              <p className='napp_section_box_text'>
                Un accès pour tous aux produits haut-de-gamme et luxueux, grâce à la puissance de la réalité augmentée.
              </p>
          </div>
        </div>
        <div>
          <img src={capsul} alt="capsul" />
          <img src={vector2} className='napp_section_separator' alt="vector2" />
        </div>
    </section>
        
        
    
  )
}

export default Section2