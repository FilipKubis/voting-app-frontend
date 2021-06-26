import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ElectionHome from './ElectionHome';

describe('<ElectionHome />', () => {
  test('it should mount', () => {
    render(<ElectionHome />);
    
    const electionHome = screen.getByTestId('ElectionHome');

    expect(electionHome).toBeInTheDocument();
  });
});