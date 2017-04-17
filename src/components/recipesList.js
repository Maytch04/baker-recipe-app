import React from 'react'
import Steps from './steps'
import{addSteps} from '../api/jsonData'
import{getRecipe} from '../api/jsonData'
import{addRecipe} from '../api/jsonData'
import {addNotes} from '../api/jsonData'
import {addUsers} from '../api/jsonData'
import {connect} from 'react-redux'


const RecipesList = React.createClass({
  getInitialState(){
    return{
      recipeId:1,
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
  componentWillMount(){
    getRecipe()
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
    console.log(this.state.recipeId)
    return (
      <div>
      <div className="photo"><img src={this.state.photo} alt="Im a broken link"/></div>
        <form id="recipesForm" onSubmit={this.handleSubmit}>
          
          <input name="recipeName" onChange={this.update} type="text" placeholder="Recipe Name" value={this.state.recipeName}/>

          <input name="createdBy" onChange={this.update} type="text" placeholder="Created By" value={this.state.createdBy}/>

          <select>
            <option value={this.state.meal}>Breakfast</option>
            <option value={this.state.meal}>Lunch</option>
            <option value={this.state.meal}>Snack</option>
            <option value={this.state.meal}>Dinner</option>
          </select>

          <input name="prepTime" onChange={this.update} type="text" placeholder="Prep Time" value={this.state.prepTime}/>

          <input name="cookTime" onChange={this.update} type="text" placeholder="Cook Time" value={this.state.cookTime}/>

          <input name="cookTemp" onChange={this.update} type="text" placeholder="Cook Temp" value={this.state.cookTemp}/>
          <select>
            <option value={this.state.tempType}>F</option>
            <option value={this.state.tempType}>C</option>
          </select>

          <input name="servingAmount" onChange={this.update} type="text" placeholder="Serving Amount" value={this.state.servingAmount}/>

          <input name="servingType" onChange={this.update} type="text" placeholder="Cookies, Batches, etc..." value={this.state.servingType}/>
          </form>
          <Steps />
          <form id="recipesForm" onSubmit={this.handleSubmit}>
          <textarea rows="4" cols="50" name="note" onChange={this.update} placeholder="" value={this.state.note}>
          </textarea>
      </form>

          <button type="submit" name="clone" value="Clone" form="recipesForm">Submit</button>
          
        
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