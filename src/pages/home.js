import React from 'react'
import Page from '../components/Page'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Main from '../components/Main'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Link from '../components/Link'

export default () => (
  <Page>
    <Navigation />
    <Hero image="/images/home.jpg" />
    <Main>
      <Heading>Hi, we're Alisha and Chanel.</Heading>
      <Paragraph>We believe that friendships between Black and Asian populations are key to achieving our mutual freedom. </Paragraph>
      <Paragraph>Our project, Unblended, will use photography and interviews as a lens to celebrate and explore the complex, powerful and transformative alliances that are Afro and Asian Pacific Islander friendships.</Paragraph>
      <Paragraph align="center">
        <Link to="/about">Learn more</Link>
      </Paragraph>
    </Main>
  </Page>
)