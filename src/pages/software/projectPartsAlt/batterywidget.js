import React from 'react'
import BatteryWidgetMain from '../projects/main/batterywidget';
import BatteryWidgetDetails from '../projects/details/batterywidget';
import BatteryWidgetReflection from '../projects/reflection/batterywidget';


class batteryWidget_projectsAlt extends React.Component {

    state= {
        detailsPart:false,
        reflectionPart:false,
    }

    render(){

        var DetailsChange= e =>
        {
            this.setState({detailsPart:!this.state.detailsPart});
            this.setState({reflectionPart:false});
        }
        var ReflectionChange= e =>
        {
            this.setState({reflectionPart:!this.state.reflectionPart});
            this.setState({detailsPart:false});
        }

        const details= this.state.detailsPart;
        const reflection= this.state.reflectionPart;

    return (
        <section>
            <div className='projectOut'>
            <div className='projectAlt'>
                <div className='projectBox'>
                    <div className='projectTextAlt'>
                        <BatteryWidgetMain/>
                    </div>
                    <div className='projectLinkTextAlt'>
                        <a href='https://github.com/WolfeMatthew41/VatistaBatteryWidget.git' target="_blank" rel='noreferrer' className='projectLink'>
                        GitHub Repo
                        </a>
                        <button onClick={DetailsChange}>{details?'Hide Details':'Show Details'}</button>
                        <button onClick={ReflectionChange}>{reflection?'Hide Reflection':'Show Reflection'}</button>
                    </div>
                </div>
                <div className='projectImage'>
                   <img src='VatistaBatteryWidgetImage.png' alt='BatteryWidgetImg' className='projectImage'/>
                </div>
            </div>
            {
                details && (
            <div className='details'>
                <BatteryWidgetDetails/>
            </div>)
            }
            {
                reflection && (
            <div className='details'>
                <BatteryWidgetReflection/>
            </div>)
            }
            </div>
        </section>
    )};
}

export default batteryWidget_projectsAlt