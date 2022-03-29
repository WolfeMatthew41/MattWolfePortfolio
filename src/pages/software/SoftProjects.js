import React from 'react'
import SoftLayout from '../../components/SoftLayout'
import VrgameProject from './projectParts/vrgame'
import BatteryWidgetProject from './projectPartsAlt/batterywidget'

export default function SoftwareProjects() {
    return (
        <SoftLayout>
            <div className='stretchedParts'>
                <VrgameProject/>
                <BatteryWidgetProject/>
            </div>
        </SoftLayout>
    )
}
