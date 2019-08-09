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

describe("App", () => {
  it("Submit button can be clicked", () => {
    const { getByText } = render(<App />);

    const submitButton = getByText(/submit/i);
    fireEvent.click(submitButton);
  })
})

describe("App", () => {
  it("username field is rendered", () => {
    const { getByText, getByPlaceholderText } = render(<App />);

    const username = getByPlaceholderText(/username/i);
    expect(username).toBeTruthy();
  })
})
