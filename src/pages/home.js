import React from 'react'
import Page from '../components/Page'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Main from '../components/Main'
import H1 from '../components/H1'
import H2 from '../components/H2'
import H3 from '../components/H3'
import H4 from '../components/H4'
import Paragraph from '../components/Paragraph'
import Link from '../components/Link'
import Anchor from '../components/Anchor'

export default () => (
  <Page>
    <Navigation />
    <Hero
      full
      image="/images/closeup.jpg">
      <H1>Tiramisu icing soufflé chocolate cake</H1>
      <H2>Tart wafer dragée bonbon</H2>
      <Link to="/about">Learn More &raquo;</Link>
    </Hero>
  </Page>
)