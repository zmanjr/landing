import React,{useEffect}from 'react'
import casque from '../images/casque.png'
import './css/Section5.css'
import  AOS  from 'aos'
import  "aos/dist/aos.css";





function Section5() {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    })
  return (
    <>
    <section className='contact_session' id="contact">
        
        <div className='contact_session_cards' >
            <div className='contact_session_card one'>
                <p className='contact_session_card_content '>
                    Contactez en quelques clics l’un de nos conseillers ! Dispositif physique et mobile, réalité virtuelle, écosystème digital dédié… votre prochaine <span className="contact_session_card_content_pink">opération marketing évènementiel</span> dans la mode,
                    la beauté ou luxe commence ici ! 
                </p>
                <button className='contact_session_card_button'>Parlons nous!</button>
            </div>
            <div className='contact_session_card'>
                <p className='contact_session_card_content'>
                    Pas de projets précis en vue, mais l’envie d’en savoir plus sur Capsul Events, rendez-vous sur <a href="https://capsul-events.fr" className='contact_session_card_content_link'>notre site!</a> Vous pourrez même y faire une simulation sur la rentabilité d’une opération menée avec la Capsul.
                </p>
                <button className='contact_session_card_button'>Calculez votre ROI en live</button>
            </div>
            
        </div>
        <div className='contact_session_img'>
                <img  className='contact_session_img_img'data-aos='fade-right'src={casque} alt="casque" />
        </div>
        <div className='contact_session_gradient'></div>
    </section>
    
    </>
  )
}

export default Section5