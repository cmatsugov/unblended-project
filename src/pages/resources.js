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
      image="/images/rise.jpg">
      <H1>RESOURCES</H1>
      
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
      
      <H3>Here's What We've Been Reading</H3>
      <Paragraph>
      <Anchor to="https://www.corwin.com/sites/default/files/upm-binaries/16542_Chapter_7.pdf">Interracial Friendships (Chapter 7 of Interracial communication : Theory into Practice by Mark P. Orbe, Tina M. Harris).</Anchor>
      </Paragraph>
      <Paragraph>
      <Anchor to="http://www.popmatters.com/review/some-of-my-best-friends/">Some of My Best Friends: Writings on Interracial Friendships by Emily Bernard</Anchor>
      </Paragraph>
      <Paragraph>
      <Anchor to="https://www.amazon.com/Afro-Asia-Revolutionary-Political-Connections/dp/0822342812/ref=sr_1_1?s=books&ie=UTF8&qid=1505336981&sr=1-1&keywords=afro+asia ">Afro Asia: Revolutionary Political and Cultural Connections between African Americans and Asian Americans 
by Fred Ho (Editor), Bill V. Mullen (Editor)</Anchor>
      </Paragraph>
      <Paragraph>
        <Anchor to="http://socialdifference.columbia.edu/files/socialdiff/projects/Article__Mapping_the_Margins_by_Kimblere_Crenshaw.pdf">Mapping the Margins: Intersectionality, Identity Politics, and Violence Against Women of Color by Kimberle Crenshaw</Anchor>
        </Paragraph>
      <Paragraph>
        <H4>Want to Share a Resource?</H4>
      </Paragraph>
      <Paragraph>
      <Link to="/contact">Contact Us</Link>
      </Paragraph>
    </Main>
  </Page>
)