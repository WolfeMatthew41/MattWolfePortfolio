import React from 'react'
import Resume from '../resume'
import Contact from '../contact'
import SoftLayout from '../../components/SoftLayout'
import VrgameProject from './projectParts/vrgame'
import BatteryWidgetProject from './projectPartsAlt/batterywidget'

export default function software() {
    return (
    <SoftLayout>
        <section>
            <div className='topPart'>
               <h1>Software Engineer Entry Position</h1>
               <div className='icons'>
                   <a href='www.linkedin.com/in/matthew-wolfe4001' target="_blank" rel='noreferrer'>
                       <img src='linkedin-logo.png' alt='linkedin' className='icons'/>
                   </a>
               </div>
               <div className='pageScroll'>
                   <p>See Projects</p>
                   <img src='website-Arrow.png' alt='arrow-down' className='pageScroll'/>
               </div>
            </div>
            <div className='stretchedParts'>
                <VrgameProject/>
                <BatteryWidgetProject/>
            </div>
            <div className='resumePart'>
                <Resume/>
            </div>
            <div className='contactPart'>
                <Contact/>
            </div>
        </section>
    </SoftLayout>
    )
}
