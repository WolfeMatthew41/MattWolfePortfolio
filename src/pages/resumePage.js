import React from 'react'
import Resume from './resume'
import SoftLayout from '../components/SoftLayout'

export default function resumePage() {
    return (
        <SoftLayout>
            <div className='resumePart'>
                <Resume/>
            </div>
        </SoftLayout>
    )
}