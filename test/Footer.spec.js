import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'

import Footer from '../src/components/Footer'

describe('<Footer />', function () {

  it('should include a footer element', function () {
    const wrapper = shallow(
      <Footer phone={'123456'}/>
    )
    expect(wrapper.type()).to.equal('footer')
  })

  it('should include instructions how to call us when a phone number is passed in', function () {
    const wrapper = shallow(
      <Footer phone={'123456'}/>
    )
    expect(wrapper.contains('Call us at: 123456')).to.be.true
  })

})
