import { render } from '@redwoodjs/testing/web'

import SectionTwo from './SectionTwo'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SectionTwo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SectionTwo />)
    }).not.toThrow()
  })
})
