import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import FormikLoginForm from './LoginForm';

describe('<FormikLoginForm />', () => {
  it('renders without crashing', () => {
    render(<FormikLoginForm />);
  });
});

describe('form field validation', () => {
    it('throws error when nothing is input', () => {
      const comp = render(<FormikLoginForm />);
        const submitButton = comp.getAllByText(/submit/i)
        fireEvent.click(submitButton)
        comp.getByPlaceholderText(/required/i)
    });
})