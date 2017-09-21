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
import Bio from '../components/Bio'
import Section from '../components/Section'
import Box from '../components/Box'

export default () => (
  <Page>
    <Navigation />
    <Hero image="/images/home.jpg">
      <H1>MEET ALISHA AND CHANEL</H1>
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
        photographs by Giselle Buchanan @vishuddha
      </Paragraph>
      <H4>"As intersectional feminists of Asian and African backgrounds, we must practice intimate and educational methods of co-empowerment and compassion to nuture our interracial friendship." </H4>
      <Bio
        name="Alisha Acquaye"
        title="Writer and Organizer"
        
        image="/images/alishaheadshot.jpg">
        <Paragraph>Alisha Acquaye uses words to examine the sweet spot where pop culture, social justice and personal narrative meet. As a Ghanaian American writer, her essays explore the weird, oppressive and sometimes empowering ways Western culture and society interacts with non male bodies, blackness, sexuality, relationships and gender.</Paragraph>
        <Paragraph>Through personal essays, interviews, op-eds and journalism, Alisha’s work invites readers to contemplate intersectional identities, media, art, pop culture and the small yet significant steps we can take to make our world more loving and inclusive. Her work has been featured in Elle, Teen Vogue, Catapult, <Anchor to="http://www.okayafrica.com/author/alisha-acquaye/">OkayAfrica</Anchor>, The Establishment and more.</Paragraph>
        <Paragraph>When Alisha isn’t conjuring up stories, she co-organizes a bi monthly brunch series for women of color called <Anchor to="https://www.instagram.com/sistercirclebrunch">Sister Circle Brunch</Anchor>. Focused on self care, community building, love and delicious, multicultural food, Sister Circle Brunch is a place for women to wind down, grow closer and remember that their presence is necessary and influential in this world. </Paragraph>
        <H4>Selected Work by Alisha</H4>
        <Paragraph>
          <Anchor to="https://catapult.co/stories/the-taste-of-grief"> On Family, Ghanaian Food and Grief (Catapult) </Anchor>
        </Paragraph>
        <Paragraph>
          <Anchor to="https://theestablishment.co/the-evolution-of-nude-black-women-in-art-70ea3993dfd4">On Black Women’s Nude Bodies and the Western Art Gaze (The Establishment)</Anchor>
        </Paragraph>
        <Paragraph>
          <Anchor to="http://www.teenvogue.com/story/missy-elliott-lifestream">On the Influence of Missy Elliott (Teen Vogue)</Anchor>
        </Paragraph>
        <Paragraph>
          <Anchor to="http://www.okayafrica.com/culture-2/joshua-kissi-photography-build-safe-haven-people-color-tonl">On Photography and Creating Spaces for People of Color (Okay Africa)</Anchor>
        </Paragraph>
      </Bio>
      <Bio
        name="Chanel Matsunami Govreau"
        title="Artist and Educator"
      
        image="/images/chanelheadshot.jpg">
        <Paragraph>Chanel Matsunami Govreau is an interdisciplinary artist and youth educator based in Brooklyn, NY. Under her artist name, <Anchor to="http://queengidrea.com/">Queen Gidrea</Anchor>, she uses her body, face, regalia, and word as a site of performance storytelling. Her work is inhabited be fabulous character exaggerations and futuristic prophecies based on her experiences as a queer, multiracial, Japanese-American woman. </Paragraph>
        <Paragraph>As an experimental documentarian, her recent photography and <Anchor to="https://vimeo.com/user5185842">video work</Anchor> explores a dance style called Waacking that originated in the gay Black and Latino community in 1970's California and its current re-emergence in the urban dance scenes across Asia. Through this work, supported by an <Anchor to="https://www.artsconnectinternational.org/blog/index.php/2016/11/15/midnight-work">artist residency with Arts Connect International</Anchor> in 2016-2017, she strives to create new ways to confront cultural appropriation and improve intercultural education as the urban dance scene grows increasingly global.  </Paragraph>
        <Paragraph>Working as a youth educator in NYC public schools, Chanel combines her experience in photo performance, social justice and digital arts to create challenging and engaging arts curriculum.  Through the power of digital photography and graphic design she encourages young people to create radical and imaginative worlds to examine their lives as multicultural artists. 
          </Paragraph>
        <Paragraph>
          <Link to="http://queengidrea.com/">Chanel's Artist Website</Link>
        </Paragraph>
        <Paragraph>
          <Link to="https://www.artsconnectinternational.org/blog/index.php/2016/11/15/midnight-work">Waacking Project</Link>
        </Paragraph>
        <Paragraph>
          <Link to="https://vimeo.com/user5185842">Video work</Link>
        </Paragraph>
      </Bio>
     
    </Main>
    <Section title="Contact Us" background>
      <Box>
      Interested in participating in our project?
      <Paragraph align="center">
  
      <Link to="/contact">Email Us</Link>
      </Paragraph>
      </Box>
      </Section>
  </Page>
)