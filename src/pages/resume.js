import React from 'react'


class resume extends React.Component {

    state= {
        resumePart:false,
    }

    render(){

        var resumeChange= e =>{
            this.setState({resumePart:!this.state.resumePart});
        }

        const _resume= this.state.resumePart; 

    return (
        <div>
            <p>Here is my Resume:</p>
            <button onClick={resumeChange}>{_resume?'Hide Resume':'Show Resume'}</button>
            {
                _resume && (
                <div className='resume'>
                    <img src='MattWolfeGeneralResume.png' alt='resume' className='resume'/>
                </div>)
            }
        </div>
    )};
}

export default resume