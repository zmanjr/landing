import React,{useEffect} from 'react'
import './css/Section3.css'
import agence from '../images/agence_resp.png'
import vector3 from '../images/vector3.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Section3() {
    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    })
  return (
    <section className='nag' id="nag">
        <div className='nag_section'>
            <div className='nag_section_text'>
                <div className='nag_section_text_title'>
                    Quand marketing évènementiel se conjugue avec street marketing : découvrez l’agence Capsul Events
                </div>
                <div className='nag_section_text_content'>
                    <p className='nag_section_text_content_p1'>
                        Les expériences immersives que nous concevons s’intègrent dans une démarche proche de celles des agences de street marketing. Elles sont ancrées dans les approches <span className="nag_section_text_content_p1_pink">direct to consumer </span>et de proximité, incontournables en 2022…
                    </p>
                    <p className='nag_section_text_content_p2'>
                        Cette vision, adaptée à votre secteur d’activité, devient réalité dans la Capsul et permet d’accroître significativement l’attractivité de votre image de marque. Un exemple chiffré? Le taux d’engagement d’une opération en Capsul est généralement de l’ordre de 8 à 10%
                    </p>
                </div>
            </div>
            <div className='nag_section_img'>
                <img src={agence} data-aos='fade-left'alt='nag_section_img' />
            </div>
        </div>
        <div className='nag_section_separator'>
            <img src={vector3}  className="nag_separator"alt="nag_separator" />
        </div>
    </section>
  )
}

export default Section3