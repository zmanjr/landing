import React from 'react'
import './css/Section4.css'
import fr from '../images/fr_resp.png'
import fg from '../images/fl.png'
import vector4 from '../images/vector4.png'

function Section4() {
  return (
    <section className='noss_section'>
        <div className='noss_section_text'>
            <p className='noss_section_text_title'>3 offres orientées marketing immersif pour la beauté, la mode et le luxe, à déployer dans la Capsul</p>
            <p className='noss_section_text_subtitle'>Les spécialistes du marketing évènementiel et de la réalité virtuelle qui vous accompagnent ont conçu 3 offres* prévues pour répondre à chacune de vos problématiques. </p>
        </div>
        <div className='noss_section_boxes'>
            <div className='noss_section_box'>

                <p className='noss_section_box_title'>SATELLITE</p>
                <p className='noss_section_box_content'>Création d’un pop-up store
                immersif et engageant</p>
            </div>
            <div className='noss_section_box'>
                <p className='noss_section_box_title'>TAKE-OFF</p>
                <p className='noss_section_box_content'>Lancement d’une offre promotionnelle à l’aide de la réalité virtuelle</p>
            </div>
            <div className='noss_section_box'>
                <p className='noss_section_box_title'>GRAVITY</p>
                <p className='noss_section_box_content'> Lancement d’un nouveau produit,en s’appuyant sur la magie créée par l’expérience immersive (réalité augmentée et/ou virtuelle)</p>
            </div>
        </div>
        <div className='noss_section_ft'>

        </div>
        <div className='noss_section_separator'>

        </div>
    </section>
  )
}

export default Section4