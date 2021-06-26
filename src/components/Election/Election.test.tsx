import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Election from './Election'

describe('<Election />', () => {
  test('it should mount', () => {
    render(<Election />)

    const election = screen.getByTestId('Election')

    expect(election).toBeInTheDocument()
  })
})
