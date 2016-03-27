import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'

import Main from '../src/components/Main'

describe('<Main />', function () {

  const teamMembers =
    [
      { name: 'joe'
      , title: 'manager'
      , quote: 'go hard or go home'
      }
    , { name: 'joanna'
      , title: 'director'
      , quote: 'all the world\'s a stage'
      }
    , { name: 'jimmy'
      , title: 'sales'
      , quote: 'i believe i can fly'
      }
    ]

  it('should render an <li> for each member prop passed in', function () {
    const wrapper = render(
      <Main
        title={'Team Members'}
        teamMembers={teamMembers}
      />
    )
    expect(wrapper.find('li').length).to.equal(teamMembers.length)
  })

})

