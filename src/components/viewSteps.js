import React from 'react'
import{getRecipes} from '../api/jsonData'
import{getSteps} from '../api/jsonData'
import {connect} from 'react-redux'
import ViewSteps from './viewSteps'
// import {Link} from 'react-router-dom'

const Preview = React.createClass({
	componentWillMount(){
       getSteps()
    }, 
	
  render() {	
    return (

    	<div className="previewSteps">

            {this.props.steps.map(step=>(
            <div>
                <p>{step.directions}</p>
            

            </div>
            ))}
        </div>  
    )
  }
})

function mapStateToProps (appState){
	
	return{steps:appState.steps}
}
export default connect(mapStateToProps)(Preview)