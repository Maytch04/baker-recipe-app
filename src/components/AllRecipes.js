import React from 'react';
import {Link} from 'react-router-dom'


const AllRecipes = React.createClass({
  render() {
    return (
      <div className="recipesGrid">
       

        <div >
        <Link to="/">My Recipes</Link>
        <Link to="/recipe">Make Recipe</Link>
        <Link to="/recipe/1">Recipe Preview</Link>
       </div>

       <div >
         <div className="titleBar">
           <p>The kitchen is yours, chef!</p>
           <h3>BATCH MAKER</h3>
           <p>+</p>
         </div>
       </div>

       <div className="sideBar">
          <ul>
            <li>My Recipes</li>
            <li>Public Recipes</li>
            <li>Popular Recipes</li>
            <li>Favorite Recipes</li>
            <li>My Pantry</li>
          </ul>
       </div>
       
      </div>
    )
  }
});

export default AllRecipes