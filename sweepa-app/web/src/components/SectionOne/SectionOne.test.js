import { render } from '@redwoodjs/testing/web'

import SectionOne from './SectionOne'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SectionOne', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SectionOne />)
    }).not.toThrow()
  })
})
