import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import VoteComponent from './VoteComponent'

describe('<VoteComponent />', () => {
  test('it should mount', () => {
    render(<VoteComponent />)

    const voteComponent = screen.getByTestId('VoteComponent')

    expect(voteComponent).toBeInTheDocument()
  })
})
