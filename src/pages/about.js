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
import Section from '../components/Section'
import Box from '../components/Box'
import Icon from '../components/Icon'

export default () => (
  <Page>
    <Navigation />
    <Hero image="/images/closeup.jpg">
      <H1>ABOUT US</H1>
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
      <H2>Hi, we're Alisha and Chanel.</H2>
      <Paragraph>We believe that friendships between Black and Asian populations are key to achieving our mutual freedom. </Paragraph>
      <Paragraph>Our project, Unblended, will use photography and interviews as a lens to celebrate and explore the complex, powerful and transformative alliances that are Afro and Asian Pacific Islander friendships.</Paragraph>
    </Main>
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
        Co-facilitate dialogues with friendship duos to explore resources and solutions for successful interracial unity and co-empowerment
      </Box>
      <Box border>
        <Icon type="photography" label="PHOTOGRAPHY" />
        Co-direct photoshoots of participants in places of shared culture and memories or during actions of solidarity
      </Box>
      <Box border>
        <Icon type="actionPlan" label="ACTION PLAN" />
        Participants will contribute to an action plan that outlines specific methods for sustaining healthy and fruitful interracial friendships.
      </Box>
    </Section>
    <Paragraph color="primary" style={{ margin: 0, textAlign: 'center' }}>
      <img src="/images/downarrow.png" style={{ display: 'inline-block', height: 40 }} />
    </Paragraph>
    <Section title="Outcome">
      <Box align="center">
        <Icon type="website" label="WEBSITE" />
        Houses all audio interviews, photography, and action plans
      </Box>
      <Box align="center">
        <Icon type="zine" label="ZINE" />
        Series of writing exercises and art activities for unpacking and empowering Black and Asian friendships
      </Box>
    </Section>
    <Section title="Community Programming" background>
      <Box align="center">
        We are currently reaching out to potential community partners and funding sources to support and grow our project. 
      </Box>
    </Section>
  </Page>
)