import React from 'react'
import Contact from './contact'
import SoftLayout from '../components/SoftLayout'

export default function contactPage() {
    return (
        <SoftLayout>
            <div className='contactPart'>
                <Contact/>
            </div>
        </SoftLayout>
    )
}