import React from 'react'
import VrgameMain from '../projects/main/vrgame';
import VrgameDetails from '../projects/details/vrgame';
import VrgameReflection from '../projects/reflection/vrgame';


class vrgame_projects extends React.Component {

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
            <div className='project'>
                <div className='projectImage'>
                   <img src='VRGameImage.png' alt='VRGameImg' className='projectImage'/>
                </div>
                <div className='projectBox'>
                    <div className='projectText'>
                        <VrgameMain/>
                    </div>
                    <div className='projectLinkText'>
                        <a href='https://github.com/WolfeMatthew41/VRGame.git' target="_blank" rel='noreferrer' className='projectLink'>
                        GitHub Repo
                        </a>
                        <button onClick={DetailsChange}>{details?'Hide Details':'Show Details'}</button>
                        <button onClick={ReflectionChange}>{reflection?'Hide Reflection':'Show Reflection'}</button>
                    </div>
                </div>
            </div>
            {
                details && (
            <div className='details'>
                <VrgameDetails/>
            </div>)
            }
            {
                reflection && (
            <div className='details'>
                <VrgameReflection/>
            </div>)
            }
            </div>
        </section>
    )};
}

export default vrgame_projects