import { render } from '@redwoodjs/testing/web'

import SectionThree from './SectionThree'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SectionThree', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SectionThree />)
    }).not.toThrow()
  })
})
