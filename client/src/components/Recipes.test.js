import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Recipes from './Recipes';

describe("<Recipes /> component", () =>{
    it("Should render a list of recipes", () => {
        const comp = render(<Recipes />);

        const listedRecipes = comp.getAllByTestId("recipe");
        expect(listedRecipes).toHaveLength(7)
    })
    
})