import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Wallet from './wallet'

describe('Wallet', () => {
  xit('renders', () => {
    const tree = renderer.create(<Wallet />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
