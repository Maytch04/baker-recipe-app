import React from 'react'
import Steps from './steps'
import{addSteps} from '../api/jsonData'

import{addRecipe} from '../api/jsonData'
import {addNotes} from '../api/jsonData'
import {addUsers} from '../api/jsonData'
import {connect} from 'react-redux'




const RecipesList = React.createClass({
  getInitialState(){
    return{
      recipRecipePrevieweId:1,
      recipeName:'',
      createdBy:'', 
      meal:'',
      prepType:'',
      cookTime:'',
      cookTemp:'',
      tempType:'',
      servingAmount:'',
      servingType:'',
      photo:'',
      noteId:1,
      note:"", 
      userId:1

    }
  },
 

  update(e){
    this.setState({[e.target.name]: e.target.value})
  },

  handleSubmit(e){
    e.preventDefault()
    addRecipe(this.state.recipeName, this.state.createdBy, this.state.meal, this.state.prepTime, this.state.cookTime, this.state.cookTemp, this.state.tempType, this.state.servingAmount, this.state.servingType,this.state.photo),

    addNotes(this.state.recipeId, this.state.noteId, this.state.note),
    addUsers(this.state.createdBy, this.state.userId, this.state.recipeId)
    // addSteps(this.state.recipeId)

    this.setState({
      recipeId: this.state.recipeId + 1,
      recipeName:'',
      createdBy:'', 
      meal:'',
      prepTime:'',
      cookTime:'',
      cookTemp:'',
      tempType:'',
      servingAmount:'',
      servingType:'',
      photo:'',
      noteId:this.state.noteId + 1,
      note:"", 
      userId:this.state.userId + 1
      
    

    })
  },


  render() {
    return (
      <div className="recipeContainer">
      <div className="basicSeperator">
      <h2>Basic Info</h2>
      <div className="basicHR"></div>
      </div>

     

       
        <form id="recipesForm" onSubmit={this.handleSubmit}>
        <div className="photoBox"><div className="photo"><img src={this.state.photo} alt=""/></div>
          <div className="nameInputs">
            <input className="recipeName" name="recipeName" onChange={this.update} type="text" placeholder="Recipe Name" value={this.state.recipeName}/>

            <input className="createdBy" name="createdBy" onChange={this.update} type="text" placeholder="Created By" value={this.state.createdBy}/>
            <div className="radios">
            <input type="radio" name="pubOrPriv" value="male" />Make it Public
            <input className="radio2" type="radio" name="pubOrPriv" value="female" />Keep it Private<br />
          </div>
          </div> 
        </div>

        <div className="basicInfoCook">
          <input className="meal" name="meal" onChange={this.update} type="text" placeholder="Breakfast, Lunch, Dinner" value={this.state.meal}/>

          <input name="prepTime" onChange={this.update} type="text" placeholder="Prep Time" value={this.state.prepTime}/>

          <input name="cookTime" onChange={this.update} type="text" placeholder="Cook Time" value={this.state.cookTime}/>

          <input name="cookTemp" onChange={this.update} type="text" placeholder="Cook Temp" value={this.state.cookTemp}/>

          <input name="tempType" onChange={this.update} type="text" placeholder="°F ~ °C" value={this.state.tempType}/>

        </div>

        <div className="serving">
        <p>This recipe will make:</p>
        <input  name="servingAmount" onChange={this.update} type="text" placeholder="Serving Amount" value={this.state.servingAmount}/>
          <input name="servingType" onChange={this.update} type="text" placeholder="Cookies, Batches, etc..." value={this.state.servingType}/>
        </div>
        <div className="rule">
          <h3>Step</h3>
          <div className="stepHR"></div>
        </div>

        </form>
          <Steps />
        <form id="recipesForm" onSubmit={this.handleSubmit}>
            <textarea className="recipeNotes" name="note" onChange={this.update} placeholder="Notes" value={this.state.note}>
            </textarea>
        </form>

          <div className="recipeSubmit">
            <button className="recipeForm" type="submit" name="clone" value="Clone" form="recipesForm">Save Recipe</button>
          </div>
        
          {this.props.recipes.map(recipe=>(
            <div key={recipe.id}>
              
            </div>
            ))}
          
      </div>
     
    )
  }
})

function mapStateToProps (appState){
  return{recipes:appState.recipes}
}
export default connect(mapStateToProps)(RecipesList)