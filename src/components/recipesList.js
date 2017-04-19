import React from 'react'
import {Link} from 'react-router-dom'

export default React.createClass({
  render() {
    return (
      <div>
        <Link to="/">RecipeList</Link>
        <Link to="/recipe/1">Recipe 1</Link>

        <h1>Recipe 1{this.props.match.params.recipeId}</h1>
      </div>
      
    )
  }
})