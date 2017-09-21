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
      image="/images/stairs.jpg">
      <H1>CONTACT</H1>
      
    </Hero>
    <Main>
    <Paragraph style={{
        position: 'absolute',
        top: 4,
        right: 4,
        margin: 0,
        fontSize: 10,
        color: '#aaa'
      }}>
        photograph by Giselle Buchanan @vishuddha
      </Paragraph>
      <H2>Questions, Ideas, Collaborations?</H2>
      <H3>Email Us</H3>
      
      <Paragraph>unblendedproject(at)gmail.com</Paragraph>
    </Main>
  </Page>
)