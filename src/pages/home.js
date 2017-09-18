import React from 'react'
import styled from 'styled-components'
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
import Section from '../components/Section'
import Box from '../components/Box'
import Icon from '../components/Icon'
import media from '../media'

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
    <Section title="First Steps">
      <Box border>
        Research Black + Asian alliances and interracial friendships
      </Box>
      <Box border>
        Create a working model for interviewing participants
      </Box>
      <Box border>
        Outreach to our network of People of Color to find Black and Asian friendship duos
      </Box>
    </Section>
    <Section title="Our Process" background>
      <Box border>
        <Icon type="dialog" label="DIALOGUE" />
        Co-facilitate dia- logues with friend- ship duos to explore resources and solu- tions for successful interracial unity and co-empowerment
      </Box>
      <Box border>
        <Icon type="photography" label="PHOTOGRAPHY" />
        Co-direct photo- shoots of participants in places of shared culture and memories or during actions of solidarity
      </Box>
      <Box border>
        <Icon type="actionPlan" label="ACTION PLAN" />
        Participants will contribute to an action plan that outlines specific methods for sustaining healthy and fruitful interracial friendships.
      </Box>
    </Section>
    <Paragraph color="primary" style={{
      margin: 0,
      fontSize: 72,
      height: 30,
      textAlign: 'center',
      transform: 'translateY(-54px)'
    }}>⬇</Paragraph>
    <Section title="Outcome">
      <Box>
        <strong>WEBSITE</strong><br />
        Houses all audio interviews, photography, and action plans
      </Box>
      <Box>
        <strong>ZINE</strong><br />
        Series of writing exercises and art activities for unpacking and empowering Black and Asian friendships
      </Box>
    </Section>
  </Page>
)