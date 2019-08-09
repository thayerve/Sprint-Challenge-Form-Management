import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("<Recipes /> component", () =>{
  it("Should render a list of recipes", () => {
      const comp = render(<App />);

      const listedRecipes = comp.getAllByTestId("recipe");
      expect(listedRecipes).toHaveLength(7)
  })
  
})