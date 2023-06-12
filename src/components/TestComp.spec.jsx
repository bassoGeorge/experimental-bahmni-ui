import React from 'react';
import { render } from '@testing-library/react'
import { TestComponent } from './TestComp';

describe('TestComp', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<TestComponent />);
    expect(asFragment()).toMatchSnapshot();
  })

  it('contains dummy data', () => {
    const component = render(<TestComponent />);
    expect(component.getByRole('heading', { name: 'Hello World!' })).toBeTruthy();
  })
});