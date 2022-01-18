import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('renders the select wallet button', () => {
    render(<Home />)

    const selectWalletButton = screen.getByText('Select Wallet')

    expect(selectWalletButton).toBeInTheDocument()
  })

  it('renders the disconnect wallet button', () => {
    render(<Home />)

    const disconnectWalletButton = screen.getByText('Disconnect Wallet')

    expect(disconnectWalletButton).toBeInTheDocument()
    expect(disconnectWalletButton).toBeDisabled()
  })
})
