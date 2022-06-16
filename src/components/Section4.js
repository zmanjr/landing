import React from 'react'
import './css/Section4.css'
import fr from '../images/fr_resp.png'
import fg from '../images/fl.png'
import vector4 from '../images/vector4.png'

function Section4() {
  return (
    <section className='a5' id="noss">
        <p className='a5_title'>
            3 offres orientées marketing immersif pour la beauté, la mode et
            le luxe, à déployer dans la Capsul
          </p>
          <p className='a5_description'>
            Les spécialistes du marketing évènementiel et de la réalité virtuelle qui vous accompagnent ont conçu 3 offres* prévues pour répondre à chacune de vos problématiques. 
          </p>
          
          <div className='a5_divs'>
          <img src={fr} className="fr" alt="fr" />
          
              <div className='a5_div .one'>
                  <p className='a5_div_title'>SATELLITE</p>
                  <p className='a5_div_content'>
                      Création d’un pop-up store immersif et engageant
                  </p>
              </div>
              <div className='a5_div .two'>
                  <p className='a5_div_title'>TAKE-OFF</p>
                  <p className='a5_div_content'>
                      Lancement d’une offre promotionnelle à l’aide de la réalité virtuelle
                  </p>
              </div>
              <div className='a5_div .three'>
                  <p className='a5_div_title'>GRAVITY</p>
                  <p className='a5_div_content'>
                       Lancement d’un nouveau produit,en s’appuyant sur la magie créée par l’expérience immersive (réalité augmentée et/ou virtuelle)
                  </p>
              </div>
              <img src={fg} className="fg" alt="fg" />
          </div>
          <div className='noss_section_gradient_1'></div>
          <div className='noss_section_gradient_2'></div>
          <div className='a5_footer'>
          <p className='a5_ft'>*la durée et les options des offres sont entièrement modulables.</p>
          <img  className="noss_img"src={vector4} alt="vector4"/>
          </div>
           
    </section>
  )
}

export default Section4