import React from 'react'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'

const links =
  [ 'About Us'
  , 'Team'
  , 'FAQ'
  , 'Sign In'
  ]

const team =
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

export default () => {
  return (
    <div>
      <Header
        header={'WP Functional React'}
        links={links}
      />
      <Main
        title={'Meet the Team'}
        teamMembers={team}
      />
      <Footer phone={'+1 888 555-2011'} />
    </div>
  )
}
