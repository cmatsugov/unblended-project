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
    <Main>
      <Heading>About</Heading>
      <Paragraph>about info here.</Paragraph>
    </Main>
  </Page>
)