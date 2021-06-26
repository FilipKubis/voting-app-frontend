import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ElectionList from './ElectionList';

describe('<ElectionList />', () => {
  test('it should mount', () => {
    render(<ElectionList />);
    
    const electionList = screen.getByTestId('ElectionList');

    expect(electionList).toBeInTheDocument();
  });
});