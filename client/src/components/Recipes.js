import React from 'react';
import axios from 'axios';


export default class Recipes extends React.Component {
    constructor() {
        super();
        this.state = {
            recipes: []
        }
    }

    componentDidMount() {
        console.log("starting recipes data: ", this.state.recipes);
        axios
            .get("http://localhost:5000/api/restricted/data")
            .then(res => {
                // console.log("axios get res: ", res);
                this.setState({ recipes: res.data });
            })
    }
    render() {
        return (
            <div >
            {this.state.recipes.map(recipe => {
                return(
                <div key={recipe.name} data-testid="recipe">
                    <h1>{recipe.name}</h1>
                    <p>Course: {recipe.course}</p>
                    <p>Technique: {recipe.technique}</p>
                    <p>Ingredients: {recipe.ingredients.length}</p>
                </div>
                )
            })}
            </div>
        );
    }
}


// {name: "Brisket", course: "Main", technique: "Sous-Vide", ingredients: Array(5)}