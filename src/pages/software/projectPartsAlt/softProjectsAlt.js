import React from 'react'
import ProjectMain from '../projects/main/project';
import ProjectDetails from '../projects/details/project';
import ProjectReflection from '../projects/reflection/project';


class software_projectsAlt extends React.Component {

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
                        <ProjectMain/>
                    </div>
                    <div className='projectLinkTextAlt'>
                        <a href='https://www.linkedin.com/' target="_blank" rel='noreferrer' className='projectLink'>
                        GitHub Repo
                        </a>
                        <button onClick={DetailsChange}>{details?'Hide Details':'Show Details'}</button>
                        <button onClick={ReflectionChange}>{reflection?'Hide Reflection':'Show Reflection'}</button>
                    </div>
                </div>
                <div className='projectImage'>
                   <img src='linkedin-logo.png' alt='projectImg' className='projectImage'/>
                </div>
            </div>
            {
                details && (
            <div className='details'>
                <ProjectDetails/>
            </div>)
            }
            {
                reflection && (
            <div className='details'>
                <ProjectReflection/>
            </div>)
            }
            </div>
        </section>
    )};
}

export default software_projectsAlt