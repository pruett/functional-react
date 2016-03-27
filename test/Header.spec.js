import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'

import Header from '../src/components/Header'

describe('<Header />', function () {

  it('should contain an <h1> element', function () {
    const wrapper = shallow(
      <Header
        header={'This is a title'}
        links={[]}
      />
    )
    expect(wrapper.contains(
      <h1>This is a title</h1>
    )).to.be.true
  })

})
